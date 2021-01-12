<template>
  <intro />
  <looking-for />
  <about-project />
</template>

<script>
import { defineAsyncComponent } from "vue";

const Intro = defineAsyncComponent(() => import("@c/Main/Intro.vue"));
const LookingFor = defineAsyncComponent(() => import("@c/Main/LookingFor.vue"));
const AboutProject = defineAsyncComponent(() => import("@c/Main/AboutProject.vue"));

export default {
  components: {
    Intro,
    LookingFor,
    AboutProject,
  },
  name: "Main",
};
</script>
