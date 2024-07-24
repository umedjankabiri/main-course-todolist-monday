import {TodolistProps} from "common/types/todolistProps/TodolistProps.ts";
import {Button} from "common/components/Button/Button.tsx";
import {FC} from "react";

export const Todolist: FC<TodolistProps> = (props) => {
   const mappedTasks = props.tasks.map(task => {
      return (
         <li key={task.id}>
            <input type="checkbox" checked={task.isDone} onChange={()=> {}}/>
            <span>{task.title}</span>
            <Button title= 'x' onClick={()=> props.removeTask(task.id)}/>
         </li>
      )
   })

   return (

      <>
         <div>
            <h3>{props.title}</h3>
            <div>
               <input/>
               <Button title = '+' />
            </div>
            <ul>
               {
                  props.tasks.length === 0 ? <p>No tasks</p> : mappedTasks
               }
            </ul>
            <div>
               <Button title= "All " onClick={()=> props.changeFilter("All")}/>
               <Button title= "Active" onClick={()=> props.changeFilter("Active")}/>
                <Button title= "Completed" onClick={()=> props.changeFilter("Completed")}/>
            </div>
         </div>
      </>
   )
}