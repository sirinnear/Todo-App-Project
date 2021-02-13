<template>
    <div>
        <v-text-field
                outlined
                rounded
                label="What are you going to do?"
                class="mt-3 mb-n5"
                v-model="text"
                @keyup.enter="createTodo"
        ></v-text-field>
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
            }
        },
    }
</script>

<style scoped>

</style>