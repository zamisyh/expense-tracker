// @desc Get all transactions
// @route /api/v1/transactions
// @access Public

exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

// @desc Add all transactions
// @route /api/v1/transactions
// @access Public

exports.addTransactions = (req, res, next) => {
    res.send('ADD transactions')
}

// @desc Delete all transactions
// @route /api/v1/transactions
// @access Public

exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transactions')
}