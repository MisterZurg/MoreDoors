# Moredoors
Мордор сервис для удобства ♂️Dungeon Muster♂️ при ведении приключений!
Мордоры ...

# Build with love and
- TypeScript
- Vue
- Vite

> [!NOTE]
> При добавлении новой странички нужно зарегестрировать её в
> ```js
> // index.ts
> import LostMines_0_Intro from "@/views/adventures/lost-mines/0-Intro.vue"
> const routes = [
>     {
>         path: "/pandalin-0", 
>         name: "pandalin-0", 
>         component: LostMines_0_Intro
>     }
> ]
> ```
> ```js
> // И сделать роутинг в новом компоненте 
> const phandalin = ([
>             {name:"Затерянные Рудники Фанделвера", pic:David, to:"/pandalin-0"},
>             {name:"Дракон Ледяного Пика", pic:David, to:""}
>         ])
> // ...
> ```
> ```html
> <router-link 
>       v-for="adv in phandalin" :key="adv.name"
>       :to="adv.to">
> <!-- ...   -->
> </router-link>
> ```