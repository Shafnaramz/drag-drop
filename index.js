const express=require('express')
 const dataService =require('./dataservice')
 const db = require("./db");
// const Todo = require("Todo")
// const path =require('path')

const app=express();
// app.set("view engine","ejs");
// var todoList=[
//   "wishing me",
//   "on 24th march"
// ]


app.post('/',function(req,res,next){
const result =  dataService.createTodo(req.body)
  res. status(result.statusCode) .json(result)
})
app.get('/',function(req,res,next){
  const result =  dataService.getTodos()
  .then(todos=>{
    res.json(todos)
  })
    
  })
// app.post('/', function(req, res, next) {
//         let data =req.body; 
//        const result = createTodo(data);
//         res.status(result.statusCode).json(result);
//        // res.render('index', { title: 'Express' });
//       });
      
 

 app.listen(4000,()=>{
    console .log("Server started at port 4000") 
  })