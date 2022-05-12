import React, { createContext, useReducer } from "react";
import AppReducer from "../reducer/AppReducer";
import axios from 'axios'

//Initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions(){
        try{
            const res = await axios.get("/api/v1/transactions")
            dispatch({
                type: "GET_TRANSACTIONS",
                payload: res.data.data
            })
        }catch(err){
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error
            })
        }
    }

    // Handle Function
    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })
        }

    }

    const addTransaction = async (transaction) => {
        const config = {
            headers:{
                'Content-Type': 'application/json' 
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })
        }

    }


    return <GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction,
        getTransactions,
        loading: state.loading,
        error: state.error,
        addTransaction
     }}>
        {children}
    </GlobalContext.Provider>
}
