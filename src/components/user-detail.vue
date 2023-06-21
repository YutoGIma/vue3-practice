<template>
    <div>
        <h2>ユーザー詳細</h2>
    </div>
</template>

<script>
import {onMounted} from "vue"
import axios from "axios"
import { useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute()
        onMounted(async () =>{
            let userId = route.params.id
            try {
                console.log(`http://localhost:3003/users/${userId}`)
                const response = await axios.get(`http://localhost:3003/users/${userId}`)
                console.log(response.data)
            } catch (error) {
                console.log(error, error.data.message)
            }
        } )
    }
}
</script>