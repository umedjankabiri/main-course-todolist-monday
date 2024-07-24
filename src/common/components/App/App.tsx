import 'common/components/App/App.css'
import {Todolist} from "common/components/Todolist/Todolist.tsx";
import {TaskProps} from "common/types/tasksProps/TaskProps.ts";
import {useState} from "react";
import {FilterValuesProps} from "common/types/todolistProps/FilterValuesProps.ts";

let initialState: TaskProps[] = [
   {id: 1, title: 'HTML&CSS', isDone: true},
   {id: 2, title: 'JS', isDone: true},
   {id: 3, title: 'ReactJS', isDone: false},
   {id: 4, title: 'Redux', isDone: false},
   {id: 5, title: 'TypeScript', isDone: false},
   {id: 6, title: 'RTK Query', isDone: false},
]

function App() {
   const [tasks, setTasks] = useState<TaskProps[]>(initialState);
   const [filteredTasks, setFilteredTasks] = useState<FilterValuesProps>("All");

   let tasksForTodolist = tasks
   filteredTasks === "Active" ? tasksForTodolist = tasks.filter(task => !task.isDone) : tasksForTodolist
   filteredTasks === "Completed" ? tasksForTodolist = tasks.filter(task => task.isDone) : tasksForTodolist

   const removeTask = (taskID: number) => {
      const filteredTasks = tasks.filter(task => task.id !== taskID)
      setTasks(filteredTasks);
   }
   const changedFilter = (filter: FilterValuesProps) => setFilteredTasks(filter)

   return (
      <div className="App">
         <Todolist
             title="What to learn"
             tasks={tasksForTodolist}
             removeTask={removeTask}
             changeFilter={changedFilter}
         />
      </div>
   )
}

export default App