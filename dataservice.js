  
  const db = require("./db");

  const getTodos = ()=>{
    return db.Todo.find();
}

const createTodo = (data)=>{
    
    
    const todo = new db.Todo(data);
    todo.save()
    .then(d=>{
        console.log(d)
    })
    .catch(err=>{
        console.log(err)
    })
    return{
            statusCode:200,
             message:"Todo created successfully"
         }
    }
    module.exports={
        createTodo,
        getTodos
    }





