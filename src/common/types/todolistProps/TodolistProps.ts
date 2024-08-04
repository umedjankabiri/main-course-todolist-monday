import {TaskProps} from "common/types/tasksProps/TaskProps.ts";
import {FilterValueProps} from "common/types/todolistProps/FilterValueProps.ts";

export type TodolistProps = {
   title: string
   tasks: TaskProps[]
   removeTask: (taskID: string) => void
   changeFilter: (filtered: FilterValueProps) => void
   addTask: (title: string) => void
   changeTaskStatus: (taskID: string, taskStatus: boolean) => void
   filter: string
}