import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import Header from "./components/Header";
 
import './App.css';
 
const App=()=>{
 
  const[input, setInput]= useState("");
  const[todos, setTodos]=useState([]);
  const[editTodo, setEditTodo]= useState(null);
  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos));},[todos])
  return(
    <div className='container'>
      <div className='app-wrapper'>
        <Header/>

      
      <div>
        <Form input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}/>
      </div>
      <div><todoList todos={todos}
      setTodos={setTodos}
      setEditTodo={setEditTodo}/>
      </div>
      </div>
      </div>
  );
};
export default App;