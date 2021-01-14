<template>
  <div class="container holder">
    <div class="row">
      <div class="col-xs-12 col-md-6 order-2 order-md-1">
        <h1>AI Singapore Video Dataset Project</h1>
        <p class="lead">Video collection for machine learning</p>
        <p>
          Welcome to the AI Singapore video dataset project. Videos from this
          project will contribute to the training and testing of machine
          learning models to detect fake video and audio content.
        </p>
        <action-button label="Apply Now" :url="Links.JOB_LINK" />
      </div>
      <div class="col-xs-12 col-md-6 order-1 order-md-2 imageContainer">
        <div class="mt-1 mb-1 my-0-md">
          <res-img image="creative-and-buyer" :width="270" :height="150" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@c/Header/ActionButton.vue";
import ResImg from "@c/Common/ResImg.vue";

import Links from "@constants/Links.js";

export default {
  components: {
    ActionButton,
    ResImg,
  },
  name: "Intro",
  data: function () {
    return {
      Links,
    };
  },
};
</script>

<style lang="scss" scoped>
.holder {
  margin: 30px auto;
}

.imageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
