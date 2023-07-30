<template>
    <div>
        <Header />
        <h1>Hello User, Welcome on Add Restaurant Page</h1>
        <form class="add">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Name" />
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address" />
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
            <button type="button" v-on:click="addRestaurant">
                Add New Restaurant
            </button>
        </form>
    </div>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Add',
    components: {
        Header
    },
    data(){
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestaurant(){
            console.warn(this.restaurant);
            const result = await axios.post(
                "http://localhost:3000/restaurant", {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                }
            );
            if(result.status == 201){
                this.$router.push({name: 'Home'})
            }
            console.warn("result = ", result);
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>