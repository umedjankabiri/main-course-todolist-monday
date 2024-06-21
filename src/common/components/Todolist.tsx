import {TodolistProps} from "common/types/TodolistProps";
import {Button} from "common/components/Button.tsx";

export const Todolist = (props: TodolistProps) => {
   const mappedTasks = props.tasks.map(task => {
      return (
         <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
         </li>
      )
   })

   return (
      <>
         <div>
            <h3>{props.title}</h3>
            <div>
               <input/>
               <button>+</button>
            </div>
            <ul>
               {
                  props.tasks.length === 0 ? (
                        <p>No tasks</p>
                     )
                     :
                     mappedTasks
               }
            </ul>
            <div>
               <Button title= "All " />
               <Button title= "Active"/>
               <Button title= "Completed"/>
            </div>
            <div>{props.date}</div>
         </div>
      </>
   )
}