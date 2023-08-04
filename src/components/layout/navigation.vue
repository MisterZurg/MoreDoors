<script lang="ts">
export default {
    setup() {
      const routes = ([
        {url:"/",    text:"Главная"}, // Тут Должен Буть Мордовский Глаз
        {url:"/adventures",    text:"Приключения"},
        {url:"/sign-up", text:"Sign Up"},
        {url:"/sign-in", text:"Sign Down"},
        {url:"/test", text:"ТЕСТ"},
      ])
    return {routes}  
  }
}
// import reactive from "vue"
    
</script>

<template>
    <div class="flex-container">
        <router-link 
          v-for="route in routes" :key="route.text"   
            :to="route.url"
            class="flex-item">
            {{route.text}}
        </router-link>
    </div>
</template>
  
<style scoped>
/* .nav {
    background: #fff;
    font-weight: bold;
    padding: 0 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
    height: 62px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
    padding: auto;
  margin: auto;
}
.nav-content {
  position: absolute;
  padding: auto;
  margin: auto;
} */


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