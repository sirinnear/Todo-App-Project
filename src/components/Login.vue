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
        margin: 15px;
    }

    .input-container input {
        box-sizing: border-box;
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: rgba(99, 99, 99, 0.39) solid 2px;
        font-family: inherit;
        color: inherit;
        outline: none;
    }

    .input-container input, label {
        padding: 10px;
        margin: 10px 0px;
        font-size: 15px;
    }

    button {
        padding: 10px;
        margin: 0px 15px 10px 30px;
        font-size: 20px;
        font-family: inherit;
        color: white;
        background-color: rgba(149, 149, 149, 0.51);
        border: rgba(99, 99, 99, 0.39) solid 2px;
        border-radius: 5px;
    }
</style>