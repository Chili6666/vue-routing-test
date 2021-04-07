<template>
  <div id="nav">
    <ul class="nav-links">
      <li class="links">
        <router-link :to="{ name: 'Home' }">Home | </router-link>
      </li>

      <li v-for="destination in destinations" :key="destination.id" class="links" >
        <router-link :to="{ name: 'DestinationDetails', params: { id: destination.id }, }" >
          {{ destination.name }}
        </router-link>
      </li>

      <li class="links">
        <router-link :to="{ name: 'About' }">| About</router-link>
      </li>
    </ul>

    <label>
      IsAuthenticated:
      <input type="checkbox" v-model="state.isAuthenticated" />
    </label>
  </div>
</template>


<script lang="ts">
import { useState } from "@/store";
export default {
  name: "navigation",
  components: {},
  setup() {
    const state = useState();
    const destinations = state.destinations;
    return {
      state,
      destinations,
    };
  },
};
</script>


<style scoped>
#nav a.router-link-exact-active {
  color: #42b983;
}

#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}

* #nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}
</style>