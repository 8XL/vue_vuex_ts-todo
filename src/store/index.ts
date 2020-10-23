import Vuex,{ createStore, StoreOptions } from 'vuex';
import { todos } from './modules/todosModules/TodosMain';

export interface IRootStore {
  version: string
}

const store: StoreOptions<IRootStore> = {
  state: {
    version: '1.0',
  },
  modules: {
    todos
  }
}

export default createStore(store)