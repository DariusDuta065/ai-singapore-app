<template>
  <div class="bg-white holder">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 order-1 order-md-1 imageContainer">
          <div class="mt-1 mb-1 my-0-md">
            <res-img image="video-play" />
          </div>
        </div>
        <div class="col-xs-12 col-md-6 order-2 order-md-2">
          <h2>What is the content of the videos?</h2>
          <ul>
            <li>
              You are required to film 5 videos, at a minimum of 45 seconds long
              per video.
            </li>
            <li>
              Within the videos you are required to be speaking about a topic.
              There is a list of questions/topics provided that you can choose
              from or you can create your own.
            </li>
          </ul>
          <div class="d-flex flex-row-reverse">
            <action-button
              label="Questions &amp; Topics"
              url="https://docs.google.com/document/d/14Y5g-bnktfV8tEk-WqLmH7ZobdM3FEhdjJfnO2_cOsU"
            />
          </div>
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
  name: "VideoContents",
};
</script>

<style lang="scss" scoped>
.holder {
  padding: 50px 0;
}
.imageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
