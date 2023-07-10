const express=require('express')
const {people}=require('./data')
const path=require('path')
const morgan=require('morgan')
const app=express()

app.get('/api/people/:id',(req,res)=>{
    const{id}=req.params
    console.log(id)
    res.status(200).send(people)
})

app.listen(5000,()=>{
console.log("server listening to port 5000")
})
