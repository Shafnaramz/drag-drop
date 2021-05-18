const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/project_server')
const TodoSchema =mongoose.Schema({
    name:String,
    description:String,
    // userId:mongoose.ObjectId,
}, { timestamps: true })
const Todo =mongoose.model('Todo',TodoSchema);



module.exports={
    Todo
}