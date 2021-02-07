<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1>Todos</h1>
            <input type="text" placeholder="What are you going to do?">
            <TaskList/>
        </div>
    </div>
</template>

<script>
    import TaskList from '@/components/TaskList';

    export default {
        name: "Todo",
        components: {TaskList}
    }
</script>

<style scoped>
    .outer-container {
        margin: 50px 200px;
    }

    .inner-container {
        padding: 10px 100px;
    }

    h1 {
        text-align: center;
    }
    input[type=text] {
        height: 40px;
        font-size: 18px;
        /*border: white solid 1px;*/
        /*border-radius: 5px;*/
        /*background-color: rgba(202, 202, 202, 0.24);*/
    }
</style>