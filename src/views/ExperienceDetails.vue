<template>
  <div>
    {{ id }}
  </div>

  <div>
    {{ experienceSlug }}
  </div>

  <section>
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useState } from "../store";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    experienceSlug: {
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

      const experience = computed(() =>
      destination?.value?.experiences.find((item) => {
        return item.slug.toString() === props.experienceSlug;
      })
    );

    return {
      experience,
    };
  },
});
</script>


<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>