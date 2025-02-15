const mongoose = require('mongoose');


async function connectToMongoDb(){
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_CONNECT)
        console.log('mongodb is connected successfully!')
    } catch (error) {
        console.log('Error in connecting to mongodb')
    }
}

module.exports = connectToMongoDb