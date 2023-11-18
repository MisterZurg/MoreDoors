<script lang="ts">
import {ref} from "vue"

import Ch1 from "./1-goblin-arrows.vue"
import Ch2 from "./2-phandalin.vue"

export default {
    setup() {
        const chapters = ref([
            {name:"Часть 1: Гоблинские стрелы",to:Ch1},
            {name:"Часть 2: Фандалин",to:Ch2}
        ])

        return {
            chapters
        }
    }
}
</script>
<template>
    <div>
        Затерянные рудники Фанделвера
    </div>
    <div v-for="ch in chapters" :key="ch.name">
        <router-link :to="ch.to">{{ ch.name }}</router-link>
    </div>
</template>