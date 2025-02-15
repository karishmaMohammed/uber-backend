const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello from uber backend')

})

module.exports = app