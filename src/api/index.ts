import axios from 'axios';
import { ITodo } from '@/store/modules/todosModules/TodosMain/types'

const URL:string = 'https://jsonplaceholder.typicode.com/todos';

export const fetchData = async () => {
	const { data } = await axios(URL)
	return data as ITodo[]
}