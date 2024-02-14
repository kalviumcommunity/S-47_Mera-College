const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 200
// const bodyParser = require('body-parser')
const URL = 'mongodb+srv://mayur:mayurgupta2004@cluster0.qvdmxxy.mongodb.net/?retryWrites=true&w=majority'
// const routes= require("./routes")
const cors = require('cors')
const model = require('./model')
// app.use(bodyParser.json())

app.use(express.json())

// app.use('/',routes)
app.use(cors())


// mongoose.connect(URL,{dbName:'mera-college'})

// .then(()=>{
//   console.log('Connected');
//   app.get('/', (req, res) => {
//     model.find({})
//     .then(users => res.json(users))
//     .catch(err => console.log(err))
//   })
// })
// .catch((err)=>{
//   console.log(err)
// })


mongoose.connect(URL,{dbName:'mera-college'})
.then(()=>{
  console.log('Connected');
  app.post('/', (req, res) => {
    model.create(req.body)
    .then(users => {
      res.json(users)
      console.log(users);
    })
    .catch(err => console.log(err))
  })
})
.catch((err)=>{
  console.log(err)
})



app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
});




