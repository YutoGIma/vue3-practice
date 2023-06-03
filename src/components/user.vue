<template>
    <div class="user-con">
        <div class="user-create flex">
            <input type="text" v-model="newUser.name">
            <input type="text" v-model="newUser.email">
            <input type="text" v-model="newUser.password">
            <textarea v-model="newUser.explanation" cols="0" rows="4"></textarea>
            <button @click=" createUser() ">送信</button>
        </div>
        <div class="user-create-errors">
            <P v-if="errors?.name">Name Error : {{ errors.name }}</P>
            <P v-if="errors?.email">Email Error : {{ errors.email }}</P>
            <P v-if="errors?.password">Password Error : {{ errors.password }}</P>
        </div>
        <div class="user-list-con">
            <div v-for="(user, index) of userList" :key="index" class="user-list flex">
                <p>{{ user.id }}</p>
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from "vue"
import axios from "axios"
export default {
    setup() {
        const userList = ref([])
        const newUser = ref({
            name: "",
            email: "",
            password: "",
            explanation: ""
        })
        const errors = ref({})

        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:3003/users')
                userList.value = response.data
            } catch (error) {
                console.log(error, error.data.message)
            }
        })

        async function createUser(){
            try {
                const response = await axios.post('http://localhost:3003/users', newUser.value)
                console.log(response.data)
            } catch (error) {
                console.log(error)
                errors.value = error.response.data.errors
            }
        }

        return {
            userList,
            newUser,
            errors,
            createUser,
        }
    },
}
</script>

<style scoped>
.flex{
    display: flex;
    align-items: center;
}
</style>