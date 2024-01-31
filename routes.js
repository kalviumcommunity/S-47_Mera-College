const express = require('express')
const data = require("./Data.json")
const route =express()
route.use(express.json())
const port = 3000

route.get("/",(req,res)=>{
    res.send(data)
})

route.post('/',(req,res)=>{
    const NewData=req.body
    data.push(NewData)
    res.json(NewData)
})
route.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const updata=req.body
    data[id]=updata
    res.json(data)
})

route.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    data.splice(id,1)
    res.json(data)
})



route.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

module.exports = route
