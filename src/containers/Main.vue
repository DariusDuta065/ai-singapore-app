<template>
  <intro />
  <looking-for />
  <about-project />
  <video-contents />
  <video-specifications />
  <need-people />
  <payment />
</template>

<script>
import Intro from "@c/Main/Intro";
import Payment from "@c/Main/Payment.vue";
import NeedPeople from "@c/Main/NeedPeople";
import LookingFor from "@c/Main/LookingFor";
import AboutProject from "@c/Main/AboutProject";
import VideoContents from "@c/Main/VideoContents";
import VideoSpecifications from "@c/Main/VideoSpecifications";

export default {
  components: {
    Intro,
    LookingFor,
    AboutProject,
    VideoContents,
    VideoSpecifications,
    NeedPeople,
    Payment,
  },
  name: "Main",
};
</script>
