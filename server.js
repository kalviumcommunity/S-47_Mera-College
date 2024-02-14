const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 200
const URL = 'mongodb+srv://mayur:mayurgupta2004@cluster0.qvdmxxy.mongodb.net/?retryWrites=true&w=majority'
const routes= require("./routes")
const cors = require('cors')
const model = require('./model')


app.use('/',routes)
app.use(cors())


mongoose.connect(URL,{dbName:'mera-college'})

.then(()=>{
  console.log('Connected');
  app.get('/', (req, res) => {
    model.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err))
  })
})
.catch((err)=>{
  console.log(err)
})


app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
});




// app.get('/',(req,res)=>{
//   res.header({
//     "Access-Control-Allow-Origin": "*"
//   })
//   mongoose.connect(URL)
//   .then(()=>{
//     res.json( {status:'Connected'})
//   })
//   .catch((err)=>{
//     res.json({status:'Not connected'})
//     console.log(err)
//   })
// })