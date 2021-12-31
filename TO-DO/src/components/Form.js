import React, { useEffect } from 'react';

const Form=({input, setInput, todos, setTodos, editTodo, setEditTodo})=> {
   
    
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }

        else{setInput("");}
    }
    );
    const onInputChnage=(event)=>{
        setInput(event.target.value);
    };
    
    
        return(
            <form>
                
                <input type="text" placeholder="Enter a todo..." onInputChnage={onInputChnage}/>
               

                <button className='button-add' type='Submit'>
                    {editTodo ? "ok" : "Add"}
                </button>
                
            </form>
        );
    };

 
export default Form;