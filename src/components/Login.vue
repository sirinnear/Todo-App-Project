<template>
<!--    <div class="outer-container">-->
<!--        <div class="inner-container">-->
<!--            <h1>Login</h1>-->
<!--            <div class="input-container">-->
<!--                <label>Email</label>-->
<!--                <br/>-->
<!--                <input type="text">-->
<!--            </div>-->
<!--            <div class="input-container">-->
<!--                <label>Password</label>-->
<!--                <br/>-->
<!--                <input type="password">-->
<!--            </div>-->
<!--            <button class="button">Login</button>-->
<!--            <button class="button" style="margin: 0px">Register</button>-->
<!--            <p id="placeholder"></p>-->
<!--        </div>-->
<!--    </div>-->
    <v-app>
        <v-container>
            <v-card
            outlined
            class="mt-16 mx-auto elevation-3 rounded-lg"
            max-width="500"
            min-width="300">
                <v-card-title>Login</v-card-title>
                <v-form>
                    <v-container>
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
    /*h1 {*/
    /*    text-align: center;*/
    /*}*/

    /*.input-container {*/
    /*    margin: 10px 30px;*/
    /*}*/

    /*.input-container input {*/
    /*    box-sizing: border-box;*/
    /*    width: 100%;*/
    /*    height: 35px;*/
    /*    border-radius: 10px;*/
    /*    border: rgba(99, 99, 99, 0.39) solid 2px;*/
    /*    font-family: inherit;*/
    /*    color: inherit;*/
    /*    outline: none;*/
    /*}*/

    /*.input-container input, label {*/
    /*    padding: 10px;*/
    /*    margin: 10px 0px;*/
    /*    font-size: inherit;*/
    /*}*/

    /*button {*/
    /*    padding: 10px;*/
    /*    margin: 0px 10px 20px 30px;*/
    /*    font-size: inherit;*/
    /*    font-family: inherit;*/
    /*    color: white;*/
    /*    background-color: rgba(110, 112, 178, 0.51);*/
    /*    border: rgba(99, 99, 99, 0.39) solid 2px;*/
    /*    border-radius: 5px;*/
    /*}*/
</style>