<template>
	<li 
		class='todo'
		:class="{
			'completed':todo.completed
		}"
		v-if="(i < getPagination * 10 && i >= (getPagination-1) * 10)"
	>
		<i class='material-icons red-text'
			@click.prevent="changeTodo(todo.id, 'deleteTodo')"
		>
			delete
		</i>
		<label
		@click.prevent="changeTodo(todo.id, 'changeTodo')">
			<input 
				type='checkbox' 
				:checked="todo.completed" 
			/>
			<span>{{ todo.title }}</span>
		</label>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, useStore } from 'vuex';
export default defineComponent({
	props:{
		todo:{
			type: Object,
			required: true
		},
		i:{
			type: Number
		}
	},
	computed:{
    ...mapGetters([
      'getPagination'
    ])
  },
	setup(props){
		const { todo, i } = props;
		const store = useStore();
		const deleteTodo = (id: number) => {
			window.confirm('a u sure?')
			&&store.dispatch('deleteTodo', id)
		}
		const changeTodo = (id: number, action: string) => {
			store.dispatch(action, id)
		}
		return{
			todo,
			i,
			changeTodo
		}
	}
})
</script>

<style scoped>
i {
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(-50%, -50%);
	cursor: pointer;
}
</style>