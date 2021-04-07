<template>
  <!--
****   Use a <figure> element to mark up a photo in a document, and a <figcaption> element to define a caption for the photo: *****

****   imageloading in vue ************

good link: https://blog.lichter.io/posts/dynamic-images-vue-nuxt/

Static: 
<img src="@/assets/doggos/riley.jpg">
or
<img src="../assets/doggos/riley.jpg">

Dynamic: (e.g list of items)
  using webpack:
  require(). <-- this will resolve the path to the image
            
 -->
  <div class="card">
    <figure>
      <h2>{{ name }}</h2>
      <img :src="require(`@/assets/${image}`)" :alt="image" />
    </figure>
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
  max-width: 200px;
}

.card {
  padding: 10px 1px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s; 
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>
