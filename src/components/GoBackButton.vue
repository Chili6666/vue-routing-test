<template>
  <span class="go-back">
    <button @click="goBack">go back</button>
  </span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useRouter } from "vue-router";

@Options({
  components: {},
})
export default class GoBackButton extends Vue {
  private router = useRouter();

  public goBack(): void {
    //go one step back in the history : -1
    //-2 : two steps
    this.router.go(-1);
  }
}
</script>

<style scoped>
.go-back {
  display: flex;
}
button {
  border: 0;
    cursor: pointer;
}
</style>

