<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1>Login</h1>
            <div class="input-container">
                <label>Email</label>
                <br/>
                <input type="text">
            </div>
            <div class="input-container">
                <label>Password</label>
                <br/>
                <input type="password">
            </div>
            <button class="button">Login</button>
            <button class="button" style="margin: 0px">Register</button>
            <p id="placeholder"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }

    .input-container {
        margin: 10px 30px;
    }

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

    .input-container input, label {
        padding: 10px;
        margin: 10px 0px;
        font-size: inherit;
    }

    button {
        padding: 10px;
        margin: 0px 10px 20px 30px;
        font-size: inherit;
        font-family: inherit;
        color: white;
        background-color: rgba(110, 112, 178, 0.51);
        border: rgba(99, 99, 99, 0.39) solid 2px;
        border-radius: 5px;
    }
</style>