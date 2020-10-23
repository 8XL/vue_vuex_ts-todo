import { fetchData } from '@/api';
import { IRootStore } from '@/store';
import { ITodoState, ITodo } from '../TodosMain/types';

import { ActionTree } from 'vuex';

export const actions: ActionTree<ITodoState, IRootStore> = {
	async setTodos(ctx) {
		const data: void | ITodo[] = await fetchData();
		ctx.commit('SET_TODOS', data);
	},
	setPagination(ctx, count:number) {
		ctx.commit('SET_PAGINATION', count);
	},
	deleteTodo(ctx, id:number) {
		if(window.confirm('r u sure?')){
			const newTodos: ITodo[] = ctx.getters.getTodos.filter((el:ITodo)=> el.id!==id);
			ctx.commit('SET_TODOS', newTodos);
		}
	},
	changeTodo(ctx, id:number) {
		const newTodos: ITodo[] = ctx.getters.getTodos.map((todo: ITodo)=>{
			if(todo.id === id){
				todo.completed = !todo.completed;
				return todo
			}
			return todo
		}
	)
		// map((el:ITodo)=>{
		// 	if(el.id === id)return{
		// 		...el,
		// 		completed: !el.completed
		// 	}
		// 	return el
		// });
		ctx.commit('SET_TODOS', newTodos);
	}
}