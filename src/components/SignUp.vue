<template>
    <div>
        <img class="logo" src="../assets/res_logo.png">
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="text" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signUp">Sign Up</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data(){
        return {
            "name": "",
            "email": "",
            "password": ""
        }
    },
    methods: {
        signUp(){
            console.warn("signup", this.name,this.email, this.password)
        }
    }
}
</script>

<style>
.logo{
    width: 100px
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>