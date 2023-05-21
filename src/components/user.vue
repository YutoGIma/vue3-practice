<template>
    <div class="user-con">
        <div class="user-create flex">
            <input type="text" v-model="state.createUser.name">
            <input type="text" v-model="state.createUser.email">
            <input type="text" v-model="state.createUser.password">
            <textarea v-model="state.createUser.explanation" cols="0" rows="4"></textarea>
            <input type="button" @click=" createUser() " value="送信">
        </div>
        <div class="user-create-errors">
            <P v-if="state.errors?.name">Name Error : {{ state.errors.name }}</P>
            <P v-if="state.errors?.email">Email Error : {{ state.errors.email }}</P>
            <P v-if="state.errors?.password">Password Error : {{ state.errors.password }}</P>
        </div>
        <div class="user-list-con">
            <div v-for="(user, index) of state.userList" :key="index" class="user-list flex">
                <p>{{ user.id }}</p>
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive, onMounted} from "vue"
import axios from "axios"
export default {
    setup() {
        const state = reactive({
            userList: [],
            createUser: {
                name: "",
                email: "",
                password: "",
                explanation: "",
            },
            errors: {}
        })

        onMounted(() => {
            axios
            .get('http://localhost:3003/users')
                .then((response) => {
                    state.userList = response.data
                })
                .catch((error) => console.log(error, error.data.message))
        })

        function createUser(){
            axios
            .post('http://localhost:3003/users', state.createUser)
            .then((response) => console.log(response.data))
            .catch((error) => {
                console.log(error)
                state.errors = error.response.data.errors
            })
        }

        return {
            state,
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