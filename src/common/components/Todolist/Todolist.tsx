import {TodolistProps} from "common/types/todolistProps/TodolistProps.ts";
import {Button} from "common/components/Button/Button.tsx";
import {ChangeEvent, FC, useState, KeyboardEvent} from "react";

export const Todolist: FC<TodolistProps> = (props) => {
    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) =>
        setTaskTitle(event.currentTarget.value)
    const addTaskHandler = () => {
        taskTitle.trim() !== ''
            ? (props.addTask(taskTitle.trim()), setTaskTitle(""))
            : setError("Title is required");
    }
    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        taskTitle.trim() !== '' && setError(null);
        (event.ctrlKey && event.key === "Enter") && addTaskHandler()
    }

    const setAllTasksHandler = () => props.changeFilter("All")
    const setActiveTasksHandler = () => props.changeFilter("Active")
    const setCompletedTasksHandler = () => props.changeFilter("Completed")

    const mappedTasks = props.tasks.map(task => {
        const removeTaskHandler = () => props.removeTask(task.id)
        const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, event.currentTarget.checked)

        return (
            <li className={task.isDone ? 'isDone' : ''} key={task.id}>
                <input className={error ? 'error' : ''}
                       type="checkbox" checked={task.isDone}
                       onChange={changeTaskStatusHandler}/>
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
                    <input value={taskTitle}
                           onChange={changeTaskTitleHandler}
                           onKeyUp={addTaskOnKeyUpHandler}/>
                    <Button title='+' onClick={addTaskHandler}/>
                    {error && <div className={'errorMessage'}>{error}</div>}
                </div>
                <ul>
                    {
                        props.tasks.length === 0 ? <p>No tasks</p> : mappedTasks
                    }
                </ul>
                <div>
                    <Button className={props.filter === 'All' ? 'activeFilter' : ''} title="All " onClick={setAllTasksHandler}/>
                    <Button className={props.filter === 'Active' ? 'activeFilter' : ''} title="Active" onClick={setActiveTasksHandler}/>
                    <Button className={props.filter === 'Completed' ? 'activeFilter' : ''} title="Completed" onClick={setCompletedTasksHandler}/>
                </div>
            </div>
        </>
    )
}