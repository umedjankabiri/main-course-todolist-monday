export type TodolistProps = {
   title: string
   tasks: TaskProps[]
   date?: string
}
export type TaskProps = {
   id: number
   title: string
   isDone: boolean
}