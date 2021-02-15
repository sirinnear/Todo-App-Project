<template>
    <div>
        <v-text-field
                outlined
                rounded
                label="What are you going to do?"
                class="mt-3 mb-n6"
                v-model="text"
                @keyup.enter="createTodo"
        ></v-text-field>
        <v-row
                class="text-center pl-4">
            <v-col cols="3">
                <strong>Remaining: {{ $store.getters["activeTodos"].length }}</strong>
            </v-col>
            <v-col cols="3">
                <strong>Completed: {{ $store.getters["completedTodos"].length }}</strong>
            </v-col>
            <v-col class="mt-n5">
                <v-spacer/>
                <v-switch
                        class="mr-2 pl-15"
                        inset
                        label="Hide completed"></v-switch>
            </v-col>
        </v-row>
        <v-row>
            <v-btn
                class="mx-auto mt-n2 mb-4" @click="clearCompleted">Clear completed</v-btn>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "TodoHeader",
        data() {
            return {
                text: "",
            }
        },
        methods: {
            createTodo() {
                this.$store.dispatch('createTodo', { text: this.text.trim(), isDone: false });
                this.text = "";
            },
            clearCompleted() {
                this.$store.dispatch('clearCompleted');
            }
        },
        computed: {
        }
    }
</script>

<style scoped>

</style>