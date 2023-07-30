<template>
    <div>
        <Header />
        <h1>Hello User, Welcome on Add Restaurant Page</h1>
        <form class="add">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Name" />
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address" />
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
            <button type="button" v-on:click="updateRestaurant">
                Update Restaurant
            </button>
        </form>
    </div>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Update',
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
        async updateRestaurant(){
            console.warn(this.restaurant);
            const result = await axios.put(
                "http://localhost:3000/restaurant/"+this.$route.params.id, {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                }
            );
            if(result.status == 200){
                this.$router.push({name: 'Home'})
            }
            console.warn("result = ", result);
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
        console.warn(this.$route.params.id);
        const result = await axios.get(
            'http://localhost:3000/restaurant/'+this.$route.params.id
        )
        console.warn("result = ", result.data);
        this.restaurant = result.data;
    }
}
</script>