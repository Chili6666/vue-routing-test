<template>

<!-- 

we are using "named routes" instead of linking directly to each path 

+++++ Direct Link/Route +++++++

    <router-link :to="destination.slug">
      <h2>{{ destination.name }}</h2>
    </router-link>


+++++ Named Routes: +++++++

    <router-link :to="{name: 'DestinationDetails' }">
      <h2>{{ destination.name }}</h2>
    </router-link>

  Named Routs allows us to link directly to the route, without knowing the path, which means if you later change the path
  then we don't have to refactor anything here, or in any other component that link to this page,
  as everthing is controlled in the router/index.ts file.
-->


  <div class="home"></div>
  <h1>Destinations</h1>
  <label>
    IsAuthenticated:
    <input type="checkbox" v-model="state.isAuthenticated" />
  </label>
  <div class="destinations">
    <div v-for="destination in destinations" :key="destination.name">
      <router-link :to="{ name: 'DestinationDetails', params: { id: destination.id } }" >
        <DestinationCard :name="destination.name" :image="destination.image" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { useState } from "../store";
import DestinationCard from "../components/DestinationCard.vue";

export default {
  name: "home",
  components: { DestinationCard },
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
.destinations {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2px;
}
</style>
