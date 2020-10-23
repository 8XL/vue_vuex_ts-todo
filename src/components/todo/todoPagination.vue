<template>
  <ul class="center pagination">
		<li 
			class="waves-effect"
			:class="{'disabled': getPagination===1}" 
			@click.prevent="decrementPagination"
		>
			<a>
				<i class="material-icons">chevron_left</i>
			</a>
		</li>
    <li 
			class="waves-effect"
			:class="{'active': getPagination===i}" 
			v-for="i in length" 
			:key="i"  
			@click.prevent="changePagination(i)"
		>
			<a>{{i}}</a>
    </li>
		<li 
			class="waves-effect"
			:class="{'disabled': getPagination===length}" 
			@click.prevent="incrementPagination"
		>
			<a>
				<i class="material-icons">chevron_right</i>
			</a>
		</li>
  </ul>
</template>

<script lang="ts">
import { watch, ref, reactive, computed } from 'vue';
import { mapGetters, useStore } from 'vuex';

export default {
	computed:{
    ...mapGetters([
      'getPagination'
    ])
  },
	setup(){
		const store = useStore();
		const length = ref(store.getters.getTodos.length);
		watch(
			()=>store.getters.getTodos.length,
			count => {
				length.value = Math.ceil(count/ 10);
			}
		)

		const decrementPagination = () => {
			(store.getters.getPagination > 1) 
			&& store.dispatch('setPagination', store.getters.getPagination - 1);
		}
		const incrementPagination = () => {
			(store.getters.getPagination < length.value)
			&& store.dispatch('setPagination', store.getters.getPagination + 1);
		}
		const changePagination = (i: number) => {
			store.dispatch('setPagination', i)
		}

		return{
			length,
			decrementPagination,
			incrementPagination,
			changePagination
		}
	}
}
</script>

<style scoped>
li{
	color: black;
}
</style>