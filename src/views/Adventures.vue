<script lang="ts">
import {ref} from "vue"

export default{
    setup() {
        // Здесь будет просто хардкод ибо они менятся не будут
        const phandalin = ref([
            {name:"Затерянные Рудники Фанделвера", pic:"David.jpeg"},
            {name:"Дракон Ледяного Пика", pic:"David.jpeg"}
        ])

        const adventures = ref([
            {name:"Тирания Драконов"},
            {name:"Проклятье Страда"},
            {name:"..."},
        ])
        
        return {
            phandalin, adventures
        }
    }
}
</script>

<template>
<div>
    Настоящий классик я бы даже сказал плезантли
    <br/>

    <div v-for="adv in phandalin" :key="adv.name"
        >
        <img src="../assets/pics/David.jpeg" alt="vue" />
        <br/>
        {{ adv.name }}
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