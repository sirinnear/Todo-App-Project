export default {
    state: {
        todos: [
            { text: 'Task 1', isDone: false },
            { text: 'Task 2', isDone: false },
            { text: 'Task 3', isDone: false },
        ],
    },

    mutation: {
        addTodo(state, todo) {
            this.$store.state.todos.push(todo)
        }
    },
}