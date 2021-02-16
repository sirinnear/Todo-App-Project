<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-item-group v-for="(todo, i) in todos" :key="i">
            <v-item size="12">
                <v-card
                        class="mx-3 rounded-xl pr-3 mb-4"
                        :class="todo.isDone ? 'blue lighten-5': 'blue lighten-4' "
                        v-if="!toggleHide(todo) || !todo.isDone ">
                    <v-card-text class="text-center custom-card">
                        <v-row align="center" justify="center">
                            <v-col cols="1">
                                <v-checkbox
                                    v-model="todo.isDone"
                                    color="grey lighten-1"/>
                            </v-col>
                            <v-col>
                                <h3 :class="todo.isDone ? ['grey--text text--lighten-1', 'text-decoration-line-through'] : ''"
                                    class="my-2">
                                    {{ todo.text }}
                                </h3>
                                <p :class="todo.isDone ? ['grey--text text--lighten-1', 'text-decoration-line-through'] : ''">
                                    Due: {{ formatDate(todo.date) }}
                                </p>
                            </v-col>
                            <v-col cols="1">
                                    <v-dialog
                                            :ref="'dialog' + i"
                                            v-model="modal[i]"
                                            :return-value.sync="todo.date"
                                            persistent
                                            width="290px"
                                    >
                                        <template v-slot:activator="{ }">
                                            <v-btn text icon
                                                   v-model="todo.date"
                                                   :class="{ 'grey--text text--lighten-1': todo.isDone }"
                                                    @click.stop="$set(modal, i, true)"
                                                    :active="false">
                                                <v-icon>
                                                    mdi-calendar
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <v-date-picker
                                                v-model="todo.date"
                                                scrollable
                                                color="blue lighten-1"
                                        >
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                    text
                                                    color="primary"
                                                    @click.stop="$set(modal, i, false)"
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs['dialog' + i][0].save(todo.date)"
                                            >
                                                OK
                                            </v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                            </v-col>
                            <v-col cols="1">
                                <v-btn text icon
                                :class="{ 'grey--text text--lighten-1': todo.isDone }"
                                @click="deleteTodo(i)">
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
    import moment from 'moment';

    export default {
        name: "TodoList",
        data() {
            return {
                modal: {},
                hideCompleted: false,
            }
        },

        methods: {
            deleteTodo(idx) {
                this.$store.dispatch('deleteTodo', idx);
            },
            formatDate(date) {
                return moment(date).format('MMM DD, YYYY');
            },
            toggleHide() {
                this.$parent.$on('hide', d => this.hideCompleted = d);
                console.log(this.hideCompleted);
                return this.hideCompleted;
            }
        },

        computed: {
            todos() {
                return this.$store.state.todos.todos;
            },
        },
    }
</script>

<style scoped>
    .custom-card {
        padding-top: 4px;
        padding-bottom: 4px;
    }

    .v-btn--active::before {
        opacity: 0 !important;
    }
</style>