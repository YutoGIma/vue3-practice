<template>
    <div class="user-con">
        <div class="flex">
            <button @click="toCreat()">新規登録</button>
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
import { useRouter } from 'vue-router'
export default {
    setup() {
        const userList = ref([])
        const router = useRouter()

        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:3003/users')
                userList.value = response.data
            } catch (error) {
                console.log(error, error.data.message)
            }
        })


        function toCreat() {
            router.push('/user/create')
        }

        return {
            userList,
            toCreat
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