<template>
    <div>
        <v-app-bar class="blue lighten-2" flat app>
            <v-spacer></v-spacer>
            <v-btn plain dark class="mr-2">
                Logout
                <v-icon right> mdi-logout </v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "TodoAppBar"
    }
</script>

<style scoped>

</style>