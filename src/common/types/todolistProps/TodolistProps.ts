import {TaskProps} from "common/types/tasksProps/TaskProps.ts";
import {FilterValuesProps} from "common/types/todolistProps/FilterValuesProps.ts";

export type TodolistProps = {
   title: string
   tasks: TaskProps[]
   removeTask: (taskID: number) => void
   changeFilter: (filtered: FilterValuesProps) => void
}