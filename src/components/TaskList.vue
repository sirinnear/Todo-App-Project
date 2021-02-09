<template>
    <ul class="todo-list">
<!--        <li-->
<!--                v-for="todo in todos()"-->
<!--                v-bind:key="todo.id">-->
<!--&lt;!&ndash;            <div>&ndash;&gt;-->
<!--&lt;!&ndash;                <input type="checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                <label>{{ todo.text }}</label>&ndash;&gt;-->
<!--&lt;!&ndash;                <button class="date">Date</button>&ndash;&gt;-->
<!--&lt;!&ndash;                <button class="delete">Delete</button>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <p>{{todo.text}}</p>-->
<!--        </li>-->
        <li>
            <input type="checkbox">
            <label>Task 1</label>
            <button class="date">Date</button>
            <button class="delete">Delete</button>
        </li>
        <li>
            <input type="checkbox">
            <label>Task 2</label>
            <button class="date">Date</button>
            <button class="delete">Delete</button>
        </li>
    </ul>
</template>

<script>

    export default {
        name: "TaskList",
        computed: {
            todos() {
                return this.$store.state.todos.todos;
            }
        }
    }
</script>

<style scoped>
    .todo-list {

        list-style: none;
        margin: 10px 0px;
        padding: 0px;
    }

    .todo-list li {
        position: relative;
        background-color: white;
        margin: 5px;
        border-radius: 5px;
        /*height: 20px;*/
        padding: 10px;
    }

    .todo-list input[type=checkbox] {
        text-align: center;
        width: 20px;
        position: absolute;
    }

    .todo-list label {
        text-align: center;
        word-break: break-all;
        line-height: 1.2;
        /*width: 200px;*/
        /*padding: 15px 15px 15px 60px;*/
        display: block;
    }

    .todo-list .delete {
        position: absolute;
        width: 40px;
        right: 10px;
        top: 10px;
    }

    .todo-list .date {
        position: absolute;
        width: 40px;
        right: 60px;
        top: 10px;
    }
</style>