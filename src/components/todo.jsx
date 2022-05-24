import React, { useState } from 'react'

import TodoItems from './todoItems'
import styles from './todo.module.css'

 const Todo = () => {
    const [value,setValue]=useState("")
    const [todos,setTodos]=useState([])
 

  return (
    <div>Todo
        <input value={value} onChange={(e)=>{
            setValue(e.target.value);
        }}/>
        <button onClick={()=>{
           setTodos([...todos,{ id:Date.now(), value:value}])
           setValue('')
        }}>Add</button>

<div className={styles.todoList}>
{todos.map((todo)=>(
<TodoItems key={todo.id} todo={todo} />
        ))}
</div>

    </div>
  )
}
export default Todo;