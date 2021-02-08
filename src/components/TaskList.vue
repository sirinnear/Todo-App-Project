<template>
    <ul>
        <li>
            <div class="task-container">
                <input type="checkbox">
                <label>Task 1</label>
                <button class="delete">Delete</button>
            </div>
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
    .task {
        background-color: white;
        width: 100%;
    }
</style>