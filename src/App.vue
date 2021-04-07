<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { useRouter } from "vue-router";
import { useState } from "@/store";
export default {
  setup() {
    /* Install Navigation Guard 
      If the User is not Authenticated -> go to home
    */
    const router = useRouter();
    const state = useState();

    if (!state || !router) {
      console.log("Router or State not initialized");
    } 
    else {
      router.beforeEach((to, from, next) => {
        if (to.name !== "Home" && !state.isAuthenticated) {
          next({ name: "Home" });
        } 
        else {
          next();
        }
      });
    }
  },
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
