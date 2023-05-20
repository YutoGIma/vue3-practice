<template>
    <div id="list">
        <h1>動的リストの作成</h1>
        <div class="flex">
            <input type="text" v-model="state.newFruit">
            <button type="button" @click="addOriginFruit()">フルーツ追加</button>
        </div>
        <button type="button" @click="addFruit()">フルーツ増加</button>
        <ul>
            <li v-for="(fruit, index) of state.fruitsList" :key="index">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
import {reactive} from "vue";
export default {
    setup() {
        const state = reactive({
            fruitsList: ["リンゴ", "パイナップル", "オレンジ", "マンゴー", "ドラゴンフルーツ"],
            originFruits: ["リンゴ", "パイナップル", "オレンジ", "マンゴー", "ドラゴンフルーツ"],
            newFruit: "",
            count: 0,
        })

        function addOriginFruit(){
            state.originFruits.push(state.newFruit)
            console.log(state.originFruits)
        }

        function addFruit(){
            let num = state.count % state.originFruits.length;
            state.fruitsList.push(state.originFruits[num]);
            state.count = state.count + 1;
        }

        return {
            state,
            addOriginFruit,
            addFruit,
        }
    },
}
</script>

<style scoped>
.flex{
    display: flex;
    justify-content: center;
}
</style>