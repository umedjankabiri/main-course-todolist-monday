import {TaskProps} from "common/types/TaskProps.ts";

export type TodolistProps = {
   title: string
   tasks: TaskProps[]
   date?: string
}