<template>
<!--    <div class="outer-container">-->
<!--        <div class="inner-container">-->
<!--            <h1>Todos</h1>-->
<!--            <input type="text" placeholder="What are you going to do?">-->
<!--            <TaskList/>-->
<!--        </div>-->
<!--    </div>-->
    <v-app>
        <v-app-bar class="blue lighten-2" flat app>
            <v-spacer></v-spacer>
            <v-btn plain dark class="mr-2">
                Logout
                <v-icon right> mdi-logout </v-icon>
            </v-btn>
        </v-app-bar>
        <v-container>
            <v-text-field></v-text-field>
        </v-container>
    </v-app>
</template>

<script>
    // import TaskList from '@/components/TaskList';

    export default {
        name: "Todo",
        components: {},
        data() {
            return {

            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    #app {
        background-color: #E3F2FD;
    }
</style>