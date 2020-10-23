import { IRootStore } from '@/store';
import { ITodoState, ITodo } from '../TodosMain/types';

import { GetterTree } from 'vuex';

export const getters: GetterTree<ITodoState, IRootStore> = {
	getTodos(state): ITodo[]{
		const { todos } = state;
		return todos
	},
	getPagination(state):number{
		return state.pagination
	}
}