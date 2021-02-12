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
            <v-row>
                <v-col/>
                <v-col col="6">
                    <v-card
                            class="mt-10 px-4 rounded-xl"
                            min-width="600">
                        <v-container>
                            <v-text-field
                                    outlined
                                    rounded
                                    label="What are you going to do?"
                                    class="mt-3 mb-n5"></v-text-field>
                            <v-row
                                    class="text-right pl-4 mt-2">
                                <v-col cols="3">
                                    <strong>Remaining: 0</strong>
                                </v-col>
                                <v-col cols="4">
                                    <strong>Completed: 0</strong>
                                </v-col>
                                <v-col cols="5" class="mt-n5">
                                    <v-spacer/>
                                    <v-switch
                                            class="mr-2 pl-4"
                                            label="Hide completed"></v-switch>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-btn
                                        class="mx-auto mt-n2 mb-4">Clear completed</v-btn>
                            </v-row>
                            <v-divider class="my-4 mx-5"/>
                            <TaskList/>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col/>
            </v-row>

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