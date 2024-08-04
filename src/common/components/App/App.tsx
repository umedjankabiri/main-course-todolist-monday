import 'common/components/App/App.css'
import {Todolist} from "common/components/Todolist/Todolist.tsx";
import {TaskProps} from "common/types/tasksProps/TaskProps.ts";
import {useState} from "react";
import {FilterValueProps} from "common/types/todolistProps/FilterValueProps.ts";
import {v1} from "uuid";

let initialState: TaskProps[] = [
   {id: v1(), title: 'HTML&CSS', isDone: true},
   {id: v1(), title: 'JS', isDone: true},
   {id: v1(), title: 'ReactJS', isDone: false},
   {id: v1(), title: 'Redux', isDone: false},
   {id: v1(), title: 'TypeScript', isDone: false},
   {id: v1(), title: 'RTK Query', isDone: false},
]

function App() {
   const [tasks, setTasks] = useState<TaskProps[]>(initialState);
   const [filteredTasks, setFilteredTasks] = useState<FilterValueProps>("All");

   let tasksForTodolist = tasks
   filteredTasks === "Active" && (tasksForTodolist = tasks.filter(task => !task.isDone))
   filteredTasks === "Completed" && (tasksForTodolist = tasks.filter(task => task.isDone))

   const removeTask = (taskID: string) => {
      const filteredTasks = tasks.filter(task => task.id !== taskID)
      setTasks(filteredTasks);
   }
   const changedFilter = (filter: FilterValueProps) => setFilteredTasks(filter)
   const addTask = (title: string)=> {
      const newTask = {id: v1(), title: title, isDone: false}
      setTasks([newTask, ...tasks])
   }
   const changeTaskStatus = (taskID: string, taskStatus: boolean) =>
      setTasks(tasks.map(task => task.id === taskID ? {...task, isDone: taskStatus} : task));

   return (
      <div className="App">
         <Todolist
             title="What to learn"
             tasks={tasksForTodolist}
             removeTask={removeTask}
             changeFilter={changedFilter}
             addTask={addTask}
             changeTaskStatus={changeTaskStatus}
             filter={filteredTasks}
         />
      </div>
   )
}

export default App