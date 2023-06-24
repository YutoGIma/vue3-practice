<template>
    <div>
        <h2>ユーザー詳細</h2>
        <div class="flex">
            <p class="user-detail-label">ID：</p>
            <p class="user-detail-data">{{ userDetail?.id }}</p>
        </div>
        <div class="flex">
            <p class="user-detail-label">名前：</p>
            <p class="user-detail-data">{{ userDetail?.name }}</p>
        </div>
        <div class="flex">
            <p class="user-detail-label">Eメールアドレス：</p>
            <p class="user-detail-data">{{ userDetail?.email }}</p>
        </div>
        <div class="flex">
            <p class="user-detail-label">詳細：</p>
            <p class="user-detail-data">{{ userDetail?.explanation }}</p>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from "vue"
import axios from "axios"
import { useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute()
        const userDetail = ref()
        onMounted(async () =>{
            let userId = route.params.id
            try {
                const response = await axios.get(`http://localhost:3003/users/${userId}`)
                userDetail.value = response.data
            } catch (error) {
                console.log(error, error.data.message)
            }
        } )

        return {
            userDetail
        }
    }
}
</script>

<style scoped>
.flex{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>