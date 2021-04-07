<template>
  <div>
    <GoBackButton />
    <p>$route.params.id: {{ $route.params.id }}</p>
    <p>props: {{ props }}</p>
    <div>
      <section>
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
          <img :src="require(`@/assets/${destination.image}`)" />
          <p>{{ destination.description }}</p>
        </div>
      </section>

      <section class="experiences">
        <h2>Top experiences in {{ destination.name }}</h2>
        <div class="cards">
          <div v-for="experience in destination?.experiences" :key="experience.slug" class="card">
                <!--
                  Vue 3 has an issue in the router when navigating from a nested route back to home
                Navigating from router-view throws Missing required param #845
                https://github.com/vuejs/vue-router-next/issues/845
                  -->
            <router-link :to="{ name: 'ExperienceDetails', params: { experienceSlug: experience.slug },}">
              <ExperienceCard :image="experience.image" :name="experience.name"/>
            </router-link>
          </div>
        </div>

        <!-- nested route to experience Details -->
        <router-view :key="$route.path"></router-view>

      </section>
    </div>
  </div>
</template>


<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import GoBackButton from "@/components/GoBackButton.vue";
import ExperienceCard from "../components/ExperienceCard.vue";
import { useState } from "../store";

export default {
  components: {
    GoBackButton,
    ExperienceCard
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props: any) {
    const route = useRoute();
    const store = useState();

    const destination = computed(() =>
      store?.destinations?.find((item) => {
        return item.id.toString() === props.id;
      })
    );

    return {
      props,
      destination,
    };
  },
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}

</style>