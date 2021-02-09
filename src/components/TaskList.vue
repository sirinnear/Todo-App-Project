<template>
    <ul class="todo-list">
        <li>
            <input type="checkbox">
            <label>Task 1</label>
            <button class="delete">Delete</button>
        </li>
        <li>
            <input type="checkbox">
            <label>Task 2</label>
            <button class="delete">Delete</button>
        </li>
<!--        <ul class="task">Task 2</ul>-->
    </ul>
</template>

<script>

    export default {
        name: "TaskList"
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
        width: 40px;
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
        top: 9px;
    }
</style>