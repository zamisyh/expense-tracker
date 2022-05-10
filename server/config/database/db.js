const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Connection Error : ${error.message}`.red.underline.bold)
    }
}

module.exports = connectDB;