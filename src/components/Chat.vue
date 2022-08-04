<template>
    <div class="chat-container flex">
        <h1>チャット</h1>
        <div class="flex double">
            <div class="chat-con flex">
                <div class="chat-flow flex">
                    <div v-for="(message, index) of state.chatHistory" :key="index">
                        <div v-if="message.toker == 0" class="chat-myMessage flex">
                            <p>{{message.message}}</p>
                        </div>
                        <div v-if="message.toker == 1" class="chat-otherMessage flex">
                            <p>{{message.message}}</p>
                        </div>
                    </div>
                </div>
                <div class="chat-input flex">
                    <input v-model="state.newMessage" type="text">
                    <button @click="submitMessage()">送信</button>
                </div>
            </div>
            <div class="chat-con flex">
                <div class="chat-flow flex">
                    <div v-for="(message, index) of state.chatHistory" :key="index">
                        <div v-if="message.toker == 1" class="chat-myMessage flex">
                            <p>{{message.message}}</p>
                        </div>
                        <div v-if="message.toker == 0" class="chat-otherMessage flex">
                            <p>{{message.message}}</p>
                        </div>
                    </div>
                </div>
                <div class="chat-input flex">
                    <input v-model="state.newMessage2" type="text">
                    <button @click="submitMessage2()">送信</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive } from "vue";
export default {
    setup() {
        const state = reactive({
            chatHistory:[
                {message: "おはようございます。", toker: 0},
                {message: "今日もお日柄がよろしくて", toker: 0},
            ],
            newMessage: "",
            newMessage: "",
        })

        function submitMessage(){
            state.chatHistory.push({message: state.newMessage, toker:0})
            state.newMessage = ""
        }

        function submitMessage2(){
            state.chatHistory.push({message: state.newMessage2, toker:1})
            state.newMessage2 = ""
        }

        return {
            state,
            submitMessage,
            submitMessage2,
        }
    },
}
</script>

<style scoped>
#app{
    margin: 0;
}
.flex{
    display: flex;
}
.chat-container{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 16px);
    height: calc(100vh - 16px);
}
.chat-container h1{
    margin: 0;
    height: 60px;
}
.double{
    width: 100%;
    height: 100%;
}
.chat-con{
    width: 40%;
    height: 80%;
    margin: 0 auto;
    padding: 15px;
    border: #000 5px solid;
    border-radius: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
.chat-flow{
    height: calc(100% - 30px);
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto;
}
.chat-flow p{
    border-radius: 20px;
    padding: 8px 20px;
    margin: 0px;
    overflow-wrap:  break-word;
}
.chat-myMessage{
    justify-content: flex-end;
    margin-bottom: 5px;
}
.chat-myMessage p{
    background-color: #41B883;
    color: #fff;
    max-width: 75%;
    text-align: left;
}
.chat-otherMessage{
    justify-content: flex-start;
    margin-bottom: 5px;
}
.chat-otherMessage p{
    max-width: 75%;
    text-align: left;
    background-color: #35495E;
    color: #fff;
}
</style>