<template>
    <v-app>
        <v-container>
            <v-card
            outlined
            class="mt-16 mx-auto elevation-3 rounded-lg"
            max-width="500"
            min-width="300">
                <v-card-title class="justify-center display-1">Login</v-card-title>
                <v-form>
                    <v-container>
                        <v-alert
                        dense
                        text
                        type="error">Invalid email or password</v-alert>
                        <v-text-field
                                dense
                                outlined
                                label="Email"
                                class="rounded-xl"></v-text-field>
                        <v-text-field
                                dense
                                outlined
                                label="Password"
                                :type="'password'"
                                class="rounded-xl"></v-text-field>
                        <v-btn block dark class="green lighten-2 rounded-xl">Login with Email</v-btn>
                        <v-btn block dark class="blue lighten-1 mt-2 rounded-xl">Login with Google</v-btn>
                        <v-divider class="my-4 mx-auto" width="300"></v-divider>
                        <v-btn block dark class="grey lighten-1 rounded-xl">Register with Email</v-btn>
                        <!--                        <v-btn dark class="blue lighten-2 ml-2">Register</v-btn>-->
                    </v-container>

                </v-form>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    #app {
        background-color: #E3F2FD;
    }
</style>