const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 200
const URL = 'mongodb+srv://mayur:mayurgupta2004@cluster0.qvdmxxy.mongodb.net/?retryWrites=true&w=majority'
const cors = require('cors')
const model = require('./model')
const { validateSignup } = require('./Validation')

app.use(express.json())

app.use(cors())

const users = []

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


mongoose.connect(URL,{dbName:'mera-college'})
.then(()=>{
  console.log('Connected');
  app.post('/create', (req, res) => {
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


//app put
app.get('/update/:id', (req, res) => {
  const id =req.params.id;
  model.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => console.log(err))
 })
 
app.put('/update/:id', (req, res) => {
  const id =req.params.id;
  model.findByIdAndUpdate({_id:id},req.body)
  .then(users => res.json(users))
  .catch(err => console.log(err))
 })



 // delete button 
 app.delete("/delete/:id",(req,res)=>{
   const id = req.params.id
   model.findOneAndDelete({_id:id})
   .then(users => res.json(users))
   .catch(err => console.log(err))
 })



 app.get('/users',(req,res)=>{
  res.json(users)
 })

//joi
app.post("/signup",(req,res)=>{
  // const{error,value} = validateSignup(req.body);
  const validateobject = validateSignup(req.body);

  if (validateobject.error) {
    // console.log(error.details);
    return res.status(400).send(validateobject.error)
  }
  users.push(validateobject.value) 
  res.send("successfully signed up")
})


app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
});








