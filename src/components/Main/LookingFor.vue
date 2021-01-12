<template>
  <div class="bg-white holder">
    <div class="container">
      <div class="row">
        <div class="col-md-6 second">
          <img
            height="255"
            width="368"
            src="@img/creative-equipment-2.png"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <h1>What are we looking for?</h1>
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
            <action-button label="Sign Up To Twine" url="https://twine.fm" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const ActionButton = defineAsyncComponent(() =>
  import("@c/Header/ActionButton.vue")
);

export default {
  components: {
    ActionButton,
  },
  name: "LookingFor",
};
</script>

<style lang="scss" scoped>
.holder {
  padding: 50px 0;
}

.second {
  padding: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
