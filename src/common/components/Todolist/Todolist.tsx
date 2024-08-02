import {TodolistProps} from "common/types/todolistProps/TodolistProps.ts";
import {Button} from "common/components/Button/Button.tsx";
import {ChangeEvent, FC, useState, KeyboardEvent} from "react";

export const Todolist: FC<TodolistProps> = (props) => {
    const [taskTitle, setTaskTitle] = useState("")
    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => setTaskTitle(event.currentTarget.value)
    const addTaskHandler = () => {
        props.addTask(taskTitle);
        setTaskTitle("")
    }
    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => (event.ctrlKey && event.key === "Enter") && addTaskHandler()
    const setAllTasksHandler = () => props.changeFilter("All")
    const setActiveTasksHandler = () => props.changeFilter("Active")
    const setCompletedTasksHandler = () => props.changeFilter("Completed")

    const mappedTasks = props.tasks.map(task => {
        const removeTaskHandler = () => props.removeTask(task.id)
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone} onChange={() => {
                }}/>
                <span>{task.title}</span>
                <Button title='x' onClick={removeTaskHandler}/>
            </li>
        )
    })

    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={taskTitle} onChange={changeTaskTitleHandler} onKeyUp={addTaskOnKeyUpHandler}/>
                    <Button title='+' onClick={addTaskHandler}/>
                </div>
                <ul>
                    {
                        props.tasks.length === 0 ? <p>No tasks</p> : mappedTasks
                    }
                </ul>
                <div>
                    <Button title="All " onClick={setAllTasksHandler}/>
                    <Button title="Active" onClick={setActiveTasksHandler}/>
                    <Button title="Completed" onClick={setCompletedTasksHandler}/>
                </div>
            </div>
        </>
    )
}