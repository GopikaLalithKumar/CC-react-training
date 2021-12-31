import React from 'react';
 
const ToDoList = ({toDos, setTodos, setEditTodo}) => {
  const handleComplete=(todo)=>{
setTodos(
  todo.map((item)=>{
    if(item.id === todo.id)
    { return{...item, completed: !item.completed};
  }
  return item;
  })
);
  };

  const handleEdit=({id})=>{
    const findTodo=toDos.find((todo)=>todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete=({id})=>{
    setTodos(toDos.fiter((todo)=> todo.id !== id));

  }




   return (
       <div>
           {ToDoList.map(todo => (
             <li className='list-item' key={todo.id}>
               <input type="text"
               value={todo.title}
               className={'list $ {todo.completed ? "completed": ""}'}
               onChange={(event)=>event.preventDefault()}/>
               <div>
                 <button className='button-completed task-button'
                 onClick={()=>handleComplete(todo)}>
                   <i className='fa fa-check-circle'> </i>
                   </button>

                   <button className='button-edit task-button'
                 onClick={()=>handleEdit(todo)}>
                   </button>


                   <button className='button-delete task-button'
                 onClick={()=>handleDelete(todo)}>
                   <i className='fa fa-Trash'> </i>
                   </button>
                   </div>
                   </li>
           ))}
           </div> ); };
                  export default ToDoList;