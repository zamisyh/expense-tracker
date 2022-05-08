import React, { createContext, useReducer } from "react";
import AppReducer from "../reducer/AppReducer";

//Initial state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 },
        // { id: 5, text: 'Laptop', amount: 500 }
    ]
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Handle Function
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }


    return <GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
     }}>
        {children}
    </GlobalContext.Provider>
}
