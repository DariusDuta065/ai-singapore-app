<template>
  <intro />
  <looking-for />
  <about-project />
  <video-contents />
  <video-specifications />
</template>

<script>
import { defineAsyncComponent } from "vue";

const Intro = defineAsyncComponent(() => import("@c/Main/Intro.vue"));
const LookingFor = defineAsyncComponent(() => import("@c/Main/LookingFor.vue"));
const AboutProject = defineAsyncComponent(() => import("@c/Main/AboutProject.vue"));
const VideoContents = defineAsyncComponent(() => import("@c/Main/VideoContents.vue"));
const VideoSpecifications = defineAsyncComponent(() => import("@c/Main/VideoSpecifications.vue"));

export default {
  components: {
    Intro,
    LookingFor,
    AboutProject,
    VideoContents,
    VideoSpecifications,
  },
  name: "Main",
};
</script>
