<template>
  <intro />
  <looking-for />
  <about-project />
  <video-contents />
  <video-specifications />
  <need-people />
  <payment />
  <consent />
  <frequent-questions />
</template>

<script>
import Intro from "@c/Main/Intro";
import Consent from "@c/Main/Consent";
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
    Consent,
    FrequentQuestions,
  },
  name: "Main",
};
</script>
