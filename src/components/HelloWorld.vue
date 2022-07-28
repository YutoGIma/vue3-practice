<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    <List />
  </div>
</template>

<script>
import List from"./list.vue"
export default {
  name: 'HelloWorld',
  components:{List},
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
