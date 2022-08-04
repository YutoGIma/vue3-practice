<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <button @click="toChat()">チャット画面へ</button>
    <List />
  </div>
</template>

<script>
import List from"./list.vue"
import { useRouter } from 'vue-router'
export default {
  name: 'HelloWorld',
  components:{List},
  props: {
    msg: String
  },
  setup() {

    const router = useRouter()

    function toChat() {
      router.push('/chat')
    }

    return {
      count: 0,
      toChat,
    }
  }
}
</script>
