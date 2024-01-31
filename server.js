const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const data = 'mongodb+srv://mayur:mayurgupta2004@cluster0.qvdmxxy.mongodb.net/?retryWrites=true&w=majority'
const routes= require("./routes")

app.use('/',routes)

app.get('/',(req,res)=>{
  mongoose.connect(data)
  .then(()=>{
    res.json({status:'Database is connected'})
  })
  .catch((err)=>{
    res.json({status:'Not connected'})
  })
})
app.get('/ping', (req, res) => {
  res.send('Hello World!')
})
