<template>
    <div>
        <Header />
        <h1>Hello {{ name }}, Welcome to Our Homepage</h1>
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
            </tr>
            <tr v-for="item in restaurant" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Home',
    data(){
        return {
            name: '',
            restaurant: []
        }
    },
    components: {
        Header
    },

    async mounted(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;    
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
        let result = await axios.get('http://localhost:3000/restaurant');
        console.warn(result);
        this.restaurant = result.data;
    }
}
</script>
<style>
 td{
    width: 160px;
    height: 40px;
 }
</style>