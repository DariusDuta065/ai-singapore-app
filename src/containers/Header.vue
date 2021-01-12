<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a href="https://twine.net" class="navbar-brand">
          <img width="100" alt="Vue logo" src="../assets/images/logo.png" />
        </a>
        <form class="d-flex">
          <action-button label="Apply Now" />
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import ActionButton from "../components/Header/ActionButton.vue";

export default {
  components: { ActionButton },
  name: "Header",
  props: {},
};
</script>

<style scoped></style>
