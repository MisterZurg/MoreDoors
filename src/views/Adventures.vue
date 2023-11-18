<script lang="ts">
import {ref} from "vue"
// Пикча заглушка
import David from '@/assets/pics/David.jpeg'

export default{
    setup() {
        // Здесь будет просто хардкод ибо они менятся не будут
        const phandalin = ref([
            {name:"Затерянные Рудники Фанделвера", pic:David, to:""},
            {name:"Дракон Ледяного Пика", pic:David, to:""}
        ])

        const adventures = ref([
            {name:"Тирания Драконов"},
            {name:"Проклятье Страда"},
            {name:"..."},
        ])
        
        function getImage(source:string):string { 
            const imgSRC = require("@/" + source)
            return imgSRC
        }

        return {
            phandalin, adventures, getImage
        }
    }
}
</script>

<template>
<div>
    Настоящий классик я бы даже сказал плезантли
    <br/>

    <div class="flex-container"
        v-for="adv in phandalin" :key="adv.name"
        >
        <div class="flex-item">
            <img :src="adv.pic" alt="vue" />
            {{ adv.name }}
        </div>
    </div>
    
    <div v-for="adv in adventures" :key="adv.name"
        >
        <img src="../assets/pics/David.jpeg" alt="vue" />
        <br/>
        {{ adv.name }}
    </div>
    <br/>

    МИХАИЛ СЕТТИНГ
    <br/>
</div>
</template>

<style scoped>
.flex-container {
    border: 2px solid #301c15;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
    padding: auto;
    margin: auto;
}
.flex-item {
 margin: 5px;
 padding: 5px;
 font-size: 14px;
 border: 2px solid #301c15;
 color: #301c15;
 /* display: flexbox; */
}
</style>