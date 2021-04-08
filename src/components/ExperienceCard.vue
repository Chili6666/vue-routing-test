<template>
  <div class="card">
    <img :src="require(`@/assets/${image}`)" alt="experience" />
    <span class="card__text">
      {{ name }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  max-height: 200px;
}
.card {
  padding: 0 5px;
  position: relative;
  margin-right: 15px;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
