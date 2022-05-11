const Transaction = require('../models/Transaction')

// @desc Get all transactions
// @route /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transaction.length,
            data: transaction
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Add all transactions
// @route /api/v1/transactions
// @access Public

exports.addTransactions = async (req, res, next) => {
   try {
        const { text, amount } = req.body
        const transaction = await Transaction.create(req.body)
        return res.status(201).json({
            success: true,
            data: transaction
        })
   } catch (error) {
       if (error.name === 'ValidationError') {
           const messages = Object.values(error.errors).map(val => val.message)
           return res.status(400).json({
               success: false,
               error: messages
           })
       } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
       }
   }
}

// @desc Delete all transactions
// @route /api/v1/transactions
// @access Public

exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'Successfully deleted',
            data: transaction
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}