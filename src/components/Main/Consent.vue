<template>
  <div class="holder bg-white">
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <h2 class="text-center">Consent</h2>
          <p>
            In submitting the videos, you agree that AI Singapore shall own the
            copyright to the submitted videos and may use, modify, reproduce and
            distribute them for research and academic purposes, including the
            generation of fake videos for fake video detection.
          </p>
          <p>
            You are also consenting to the use of videos under the terms of
            engagement you have agreed to in creating a Twine account.
          </p>
          <p>
            You must be 18 years or over to have a Twine account and take part
            in this project.
          </p>
          <p>
            For further details on consent please visit
            <a
              :href="`${publicPath}${Links.ACTORS_INSTRUCTIONS}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              this document </a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Links from "@constants/Links";

export default {
  name: "Consent",
  data: function () {
    return {
      Links,
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.holder {
  padding: 20px 0;
}
</style>
