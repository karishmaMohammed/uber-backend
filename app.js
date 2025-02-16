const express = require('express')
const app = express()
const cors = require('cors');
const connectToMongoDb = require('./db');
const userRoutes = require('./routes/user.routes');

connectToMongoDb();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello from uber backend')

})


app.use('/users', userRoutes);

module.exports = app