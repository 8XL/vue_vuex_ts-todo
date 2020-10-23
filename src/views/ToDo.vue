<template>
  <section>
    <div class='container'>
      <todoList>
        <todoItem v-for="(todo, i) in getTodos" :key='todo.id' :todo='todo' :i='i' />
      </todoList>
      <todo-pagination />
    </div>
  </section>
</template>

<script lang="ts">
import { todoList, todoItem, todoPagination } from '@/components';// @ is an alias to /src
import { mapActions, mapGetters, useStore } from 'vuex';
import { onBeforeMount, onMounted, reactive } from 'vue';

export default { 
  components: {
    todoList,
    todoItem,
    todoPagination
  },
  computed:{
    ...mapGetters([
      'getTodos'
    ])
  },
  setup(){
    const store = useStore();
    onBeforeMount(()=>store.dispatch('setTodos'))
  }
}
</script>
