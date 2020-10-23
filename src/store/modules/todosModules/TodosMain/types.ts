export interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface ITodoState {
  todos: ITodo[],
  pagination: number
}