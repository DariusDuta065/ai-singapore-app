<template>
  <intro />
  <looking-for />
  <about-project />
  <video-contents />
  <video-specifications />
  <need-people />
  <payment />
  <frequent-questions />
</template>

<script>
import Intro from "@c/Main/Intro";
import Payment from "@c/Main/Payment.vue";
import NeedPeople from "@c/Main/NeedPeople";
import LookingFor from "@c/Main/LookingFor";
import AboutProject from "@c/Main/AboutProject";
import VideoContents from "@c/Main/VideoContents";
import FrequentQuestions from "@c/Main/FrequentQuestions";
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
    FrequentQuestions,
  },
  name: "Main",
};
</script>
