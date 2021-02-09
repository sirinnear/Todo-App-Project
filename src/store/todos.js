export default {
    state: {
        todos: [],
    },

    mutation: {
        addTodo(state, todo) {
            this.$store.state.todos.push(todo)
        }
    },
}