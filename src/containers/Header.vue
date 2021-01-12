<template>
  <div id="header">
    <nav class="navbar sticky-top navbar-light bg-light">
      <div class="container">
        <a href="https://twine.net" class="navbar-brand">
          <img width="100" height="30" alt="Twine logo" src="../assets/images/logo.png" />
        </a>
        <form class="d-flex">
          <action-button label="Apply Now" url="https://twine.fm" />
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import ActionButton from "@c/Header/ActionButton.vue";

export default {
  components: { ActionButton },
  name: "Header",
  props: {},
};
</script>

<style scoped lang="scss">
#header {
  padding: 30px 0;
}
</style>
