export default {
    state: {
        todos: [
            { text: 'Task 1', isDone: false, date: new Date().toISOString().substr(0, 10) },
            { text: 'Task 2', isDone: false, date: new Date().toISOString().substr(0, 10) },
            { text: 'Task 3', isDone: false, date: new Date().toISOString().substr(0, 10) },
        ],
    },
    mutations: {
        addTodo(state, todo) {
          state.todos.push(todo)
        },
        setTodos(state, newTodos) {
          state.todos = newTodos;
        },
    },

    actions: {
        createTodo(context, todo) {
            context.commit('addTodo', todo);
        },
        clearCompleted(context) {
            context.commit('setTodos', context.state.todos.filter(t => !t.isDone ));
        },

    },

    getters: {
        activeTodos(state) {
            return state.todos.filter(t => !t.isDone );
        },
        completedTodos(state) {
            return state.todos.filter(t => t.isDone );
        }
    }
}