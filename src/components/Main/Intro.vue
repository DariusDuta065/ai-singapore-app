<template>
  <div class="container holder">
    <div class="row">
      <div class="col-md-6">
        <h1>AI Singapore Video Dataset Project</h1>
        <h3>Video collection for machine learning</h3>
        <p>
          Welcome to the AI Singapore video dataset project. This project is to
          contribute to a public dataset to train machine learning models to
          recognise specific activities.
        </p>
        <action-button label="Apply Now" url="https://twine.fm" />
      </div>
      <div class="col-md-6 second">
        <img height="200" src="@img/creative-and-buyer.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@c/Header/ActionButton.vue";

export default {
  components: { ActionButton },
  name: "Intro",
};
</script>

<style lang="scss" scoped>
.holder {
  margin: 30px auto;
}

.second {
  padding: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
