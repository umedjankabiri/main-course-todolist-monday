import {TaskProps} from "common/types/tasksProps/TaskProps.ts";
import {FilterValueProps} from "common/types/todolistProps/FilterValueProps.ts";

export type TodolistProps = {
   title: string
   tasks: TaskProps[]
   removeTask: (taskID: number) => void
   changeFilter: (filtered: FilterValueProps) => void
}