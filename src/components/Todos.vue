<template>
    <v-app>
        <TodoAppBar/>
        <v-main>
            <v-row>
                <v-col/>
                <v-col col="6">
                    <v-card
                            class="mt-10 px-4 rounded-xl"
                            min-width="600">
                        <v-container>
                            <TodoHeader/>
                            <v-divider class="my-4 mx-5"/>
                            <TodoList/>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col/>
            </v-row>

        </v-main>
    </v-app>
</template>

<script>
    import TodoList from "@/components/TodoList";
    import TodoAppBar from "@/components/TodoAppBar";
    import TodoHeader from "@/components/TodoHeader";

    export default {
        name: "Todo",
        components: {TodoHeader, TodoAppBar, TodoList},
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    #app {
        background-color: #E3F2FD;
    }
</style>