import React from 'react'
import styles from './todo.module.css'
import { useState } from 'react'
const TodoItems = ({todo}) => {
const [Iscompleted,setIsCompleted]=useState(todo.iscompleted);
  return (
      
    <div className={styles.todo} key={todo.id}>
    
    <input type="checkbox" checked={Iscompleted} onChange={(e)=>{
        setIsCompleted(e.target.checked)
      
    }}/>
      <div className={Iscompleted? styles.striked:""}>{todo.value}</div>
      </div>

   
  )
}

export default TodoItems