const express = require('express');
const router = express.Router();
const Users = require('../models/Users.js');

// Route To Add ToDo View
// router.post('/addTodo', async (req,res)=>{
//     mongoose.connect("mongodb://localhost/BOOKRDB");

//     const todo = {todoID: req.body.todoID , todoTitle: req.body.todoTitle, todoDescription: req.body.todoDescription};
//     const newTodo = new Schemas.Todos(todo);
//     try{
//         await newTodo.save( async (err, newTodoResult) => {
//             res.redirect('./Todos');
//         });
//     }
//     catch(err) {
//         console.log(err);
//         res.end('Role not added');
//     }
// });

// Route To Get All Todos
router.get('/viewUsers',(req, res)=>{

    const usersLists = Users;
    try{
    res.end(JSON.stringify(Users));	
       
    }
    catch(err) {
        console.log(err);
        res.end('no Users Found!');
    }
});

// Route To Get Todo
// router.get('/getTodo',(req, res)=>{
//     mongoose.connect("mongodb://localhost/BOOKRDB");
//     const todosLists = Schemas.Todos;
//     try{
//             const TodoURLID = req.url.substring(req.url.lastIndexOf('todoID=')+ 7);
//             todosLists.find({todoID : TodoURLID}, async (err, newTooResult) => {
//             res.end(JSON.stringify(newTooResult));
//         },{});
//     }
//     catch(err) {
//         console.log(err);
//         res.end('ToDo not Found');
//     }
// });


// Route To ToDo Update-View
// router.post('/updateTodo', async (req,res)=>{
//     mongoose.connect("mongodb://localhost/BOOKRDB");
//     const todo = {todoID: req.body.todoID , todoTitle: req.body.todoTitle, todoDescription: req.body.todoDescription};
//     const todosLists = Schemas.Todos;

//     try{
//         todosLists.updateOne({todoID : req.body.todoID}, todo , async (err, todoResult) => {
//             res.redirect('./Todos');
//         });
//     }
//     catch(err){
//         res.end('ToDo not updated!');
//     }
// });

// Route To Delete Todo
// router.post('/deleteTodo', async (req,res)=>{
//     mongoose.connect("mongodb://localhost/BOOKRDB");
//     const todoId = {todoID: req.body.deleteTodo };
//     const newTodo = Schemas.Todos;
//     try{
//         await newTodo.deleteOne(todoId, async (err) => {
//             res.redirect('./Todos');
//         });
//     }
//     catch(err) {
//         console.log(err);
//     }
// });


module.exports = router;
