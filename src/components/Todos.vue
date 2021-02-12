<template>
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
                min-width="600"
                max-width="600"
                class="mx-auto mt-10 px-4 rounded-xl">
                <v-container>
                        <v-text-field
                                outlined
                                rounded
                                label="What are you going to do?"
                                class="mt-3 mb-n5"></v-text-field>
                        <v-row
                                class="text-center pl-4 mt-2">
                            <v-col cols="3">
                                <strong>0 item(s) left</strong>
                            </v-col>
                            <v-col cols="4">
                                <strong>0 item(s) completed</strong>
                            </v-col>
                            <v-col cols="5" class="mt-n5">
                                <v-switch
                                        class="mr-2"
                                        label="Hide completed"></v-switch>
                            </v-col>
                        </v-row>
                    <v-row>
                        <v-btn
                        class="mx-auto mt-n2 mb-4">Clear completed</v-btn>
                    </v-row>
                    <TaskList/>
                </v-container>
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
    // import TaskList from '@/components/TaskList';

    import TaskList from "@/components/TaskList";
    export default {
        name: "Todo",
        components: {TaskList},
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