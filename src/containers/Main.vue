<template>
  <intro />
  <looking-for />
</template>

<script>
import { defineAsyncComponent } from "vue";

const Intro = defineAsyncComponent(() => import("@c/Main/Intro.vue"));
const LookingFor = defineAsyncComponent(() => import("@c/Main/LookingFor.vue"));

export default {
  components: {
    Intro,
    LookingFor,
  },
  name: "Main",
};
</script>
