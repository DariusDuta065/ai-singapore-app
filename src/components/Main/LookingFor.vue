<template>
  <div class="bg-white holder">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 order-1 order-md-1 imageContainer">
          <div class="mt-1 mb-1 my-0-md">
            <res-img
              image="creatives-background-pattern"
              :width="294"
              :height="200"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-6 order-2 order-md-2">
          <h2>What are we looking for?</h2>
          <p>
            <b>We require actors to film</b> 5 short videos of themselves
            talking about a chosen topic.
          </p>
          <p>
            <b>You must be a member of Twine</b> and have a suitable device to
            film the videos on. Please see the specifications below.
          </p>
          <p>
            No editing is required of the videos, you just need to be confident
            speaking to the camera and follow all directions given to you within
            the instructions.
          </p>
          <p>
            <em>
              We will accept people who are not actors to take part in this
              project but you have to be confident you would be able to fulfill
              the requirements.
            </em>
          </p>
          <div class="d-flex flex-row-reverse">
            <action-button label="Sign Up To Twine" :url="Links.SIGN_UP" />
          </div>
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
  name: "LookingFor",
  data: function () {
    return {
      Links,
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
