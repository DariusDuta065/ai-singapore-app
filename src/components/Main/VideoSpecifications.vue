<template>
  <div class="holder">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 order-1 order-md-2 imageContainer">
          <div class="mt-1 mb-1 my-0-md">
            <res-img image="checklist" :width="302" :height="248" />
          </div>
        </div>
        <div class="col-xs-12 col-md-6 order-2 order-md-1">
          <h2>Video Specifications</h2>
          <ul>
            <li>
              Each video should have a duration of
              <strong>at least 45 seconds</strong>, a recommended length is
              between 45 and 60 seconds.
            </li>
            <li>
              Your
              <strong>voice must be clearly heard</strong>, and background noise
              is kept to a minimum.
            </li>
            <li>
              Your full
              <strong>face must be visible</strong> and unobstructed by objects
              such as your hair or face masks.
            </li>
            <li>
              Your head is between 1/8 and 1/2 of the video’s total height.
            </li>
            <li>
              Out of your 5 videos you must shoot at least 1 of each of them:
              outdoor, indoor, daytime and nighttime.
            </li>
            <li>Videos must be submitted in MP4 format.</li>
            <li>Video resolution of 1080p and a frame rate of 24.</li>
            <li>
              Audio is a bit depth of 32 bits per sample and a sampling rate of
              44.1kHz.
            </li>
          </ul>
          <p>
            We would recommend that you download
            <a
              :href="Links.ADOBE_RUSH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adobe Premiere Rush
            </a>
            on your smartphone and use it to record the videos with audio and
            export to mp4.
          </p>
          <p>
            Please visit Instructions for Actors for more information on the
            exact specifications:
          </p>
          <action-button
            label="Instructions for Actors"
            :url="`${publicPath}${Links.ACTORS_INSTRUCTIONS}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResImg from "@c/Common/ResImg.vue";
import ActionButton from "@c/Header/ActionButton.vue";

import Links from "@constants/Links.js";

export default {
  name: "VideoSpecifications",
  components: {
    ResImg,
    ActionButton,
  },
  data: function ActionButton() {
    return {
      Links,
      publicPath: process.env.BASE_URL,
    };
  },
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
