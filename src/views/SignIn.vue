<script lang="ts">
import { Hash } from "crypto"
import {ref, reactive} from "vue"

export default{
    setup() {
        const inputedLogin = ref("")
        const inputedPassword = ref("")
        let db = reactive([{}])

        function addAccountToDb(lg, ps) {
            // TODO HASH
            inputedLogin.value = ""
            inputedPassword.value = ""
            // db.push({lg, ps})
            // alert(lg + ps)
            db.push({login:lg, password:ps})
        }

        return {
            inputedLogin, inputedPassword, db, addAccountToDb
        }
    }
}
</script>

<template>
    <div>
        <form>
            <input v-model="inputedLogin" placeholder="login">
            <p>{{ inputedLogin }}</p>

            <input v-model="inputedPassword" placeholder="password">
            <p>{{ inputedPassword }}</p>
            <button
                type="button"
                @click="addAccountToDb(inputedLogin, inputedPassword)"
                >Login</button>
        </form>
        {{ db }}
    </div>
</template>

<style>

</style>