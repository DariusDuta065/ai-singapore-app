<template>
  <div class="container holder">
    <div class="row">
      <div class="col-xs-12 col-md-6 order-2 order-md-1">
        <h1>AI Singapore Video Dataset Project</h1>
        <p class="lead">Video collection for machine learning</p>
        <p>
          Welcome to the AI Singapore video dataset project. This project is to
          contribute to a public dataset to train machine learning models to
          recognise specific activities.
        </p>
        <action-button label="Apply Now" url="https://twine.fm" />
      </div>
      <div class="col-xs-12 col-md-6 order-1 order-md-2 imageContainer">
        <div class="mt-1 mb-1 my-0-md">
          <res-img image="creative-and-buyer" width="214" height="119" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@c/Header/ActionButton.vue";
import ResImg from '@c/Common/ResImg.vue';

export default {
  components: {
    ActionButton,
    ResImg,
  },
  name: "Intro",
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
