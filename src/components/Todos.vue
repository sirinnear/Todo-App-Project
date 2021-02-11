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
        <v-main>
            <v-card
            min-width="300"
            max-width="600"
            class="mx-auto mt-15 rounded-xl">
                <v-container fluid>
                    <v-text-field
                    solo
                    label="What will you be doing?"
                    class="mt-3 rounded-xl"></v-text-field>
                    <v-row class="mx-1 mt-n4">
                        <v-col>
                            <p class="mt-2">0 item(s) left</p>
                        </v-col>
                        <v-col>
                            <p class="mt-2">0 item(s) completed</p>
                        </v-col>
                        <v-col>
                            <v-btn>Clear completed</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-main>
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