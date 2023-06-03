<template>
    <div>
        <div class="user-create">
            <div class="input-con">
                <label for="">名前</label>
                <input type="text" v-model="newUser.name">
            </div>
            <div class="input-con">
                <label for="">Eメール</label>
                <input type="text" v-model="newUser.email">
            </div>
            <div class="input-con">
                <label for="">パスワード</label>
                <input type="text" v-model="newUser.password">
            </div>
            <div class="input-con">
                <label for="">その他</label>
                <textarea v-model="newUser.explanation" cols="0" rows="4"></textarea>
            </div>
            <button @click=" createUser() ">送信</button>
        </div>
        <div class="user-create-errors">
                <P v-if="errors?.name">Name Error : {{ errors.name }}</P>
                <P v-if="errors?.email">Email Error : {{ errors.email }}</P>
                <P v-if="errors?.password">Password Error : {{ errors.password }}</P>
        </div>
    </div>
</template>

<script>
import {ref} from "vue"
import axios from "axios"
export default {
    setup() {
        const newUser = ref({
            name: "",
            email: "",
            password: "",
            explanation: ""
        })
        const errors = ref({})

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
            newUser,
            errors,
            createUser,
        }
    }
}
</script>

<style scoped>
.input-con{
    display: flex;
    width: 80%;
    margin: 0 auto 20px;
}
.input-con label{
    width: 30%;
}
.input-con input{
    width: 70%;
}
.input-con textarea{
    width: 70%;
}
</style>