import { MutationTree } from 'vuex';

import { ITodoState, ITodo } from '../TodosMain/types';

export const mutations: MutationTree<ITodoState> = {
	SET_TODOS(state, payload:ITodo[]){
		state.todos = payload
	},
	SET_PAGINATION(state, payload: number){
		state.pagination = payload
	}
}