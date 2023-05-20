<template>
    <div class="user-con">
        <div class="user-list-con">
            <div v-for="(user, index) of state.userList" :key="index" class="user-list flex">
                <p>{{user.id}}</p>
                <p>{{user.name}}</p>
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
        })

        onMounted(() => {
            axios
            .get('http://localhost:3003/users')
                .then((response) => {
                    console.log(response.data)
                    state.userList = response.data
                    console.log(state.userList)
                })
                .catch((error) => console.log(error, error.message));
        })

        return {
            state
        }
    },
}
</script>

<style scoped>
.flex{
    display: flex;
}
</style>