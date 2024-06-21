
import './App.css'
import {Todolist} from "common/components/Todolist.tsx";
import {TaskProps} from "common/types/TaskProps";

function App() {
   const tasks1: TaskProps[] = [
      {id: 1, title: 'HTML&CSS', isDone: true},
      {id: 2, title: 'JS', isDone: true},
      {id: 3, title: 'ReactJS', isDone: false},
      {id: 4, title: 'Redux', isDone: false},
      {id: 5, title: 'TypeScript', isDone: false},
      {id: 5, title: 'RTK Query', isDone: false},
   ]
   const tasks2: TaskProps[] = []

   return (
      <div className="App">
         <Todolist
            title="What to learn"
            tasks={tasks1}
            date={'21.06.2024'}
         />
         <Todolist
            title="Songs"
            tasks={tasks2}
         />
      </div>
   )
}

export default App