import { Module } from 'vuex';

import { IRootStore } from '@/store';
import { ITodoState } from './types';
import { actions } from '../TodosActions';
import { mutations } from '../TodosMutations';
import { getters } from '../TodosGetters';

export const state: ITodoState = {
	todos: [],
	pagination: 1
}

export const todos: Module<ITodoState, IRootStore> = {
	state,
	getters,
	mutations,
	actions,
}