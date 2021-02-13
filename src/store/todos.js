export default {
    state: {
        todos: [
            { text: 'Task 1', isDone: false },
            { text: 'Task 2', isDone: false },
            { text: 'Task 3', isDone: false },
        ],
    },
    mutations: {
      addTodo(state, todo) {
          state.todos.push(todo)
      }
    },

    actions: {
        createTodo(context, todo) {
            context.commit('addTodo', todo);
        }
    },
}