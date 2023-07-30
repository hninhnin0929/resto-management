<template>
    <div>
        <Header />
        <h1>Hello User, Welcome to Our Homepage</h1>
    </div>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'Home',
    components: {
        Header
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>