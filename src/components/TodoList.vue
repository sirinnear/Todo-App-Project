<template>
    <div>
        <v-item-group v-for="(todo, i) in todos" :key="i">
            <v-item size="12">
                <v-card
                        class="mx-3 rounded-xl pr-3 mb-4 grey lighten-3">
                    <v-card-text class="text-center custom-card">
                        <v-row align="center" justify="center">
                            <v-col cols="1">
                                <v-checkbox/>
                            </v-col>
                            <v-col>
                                <h3>{{ todo.text }}</h3>
                            </v-col>
                            <v-col cols="1">
                                <v-btn text icon>
                                    <v-icon>
                                        mdi-calendar
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="1">
                                <v-btn text icon>
                                    <v-icon>
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-item>
        </v-item-group>
    </div>
</template>

<script>

    export default {
        name: "TodoList",
        computed: {
            todos() {
                return this.$store.state.todos.todos;
            }
        }
    }
</script>

<style scoped>
    .custom-card {
        padding-top: 4px;
        padding-bottom: 4px;
    }
</style>