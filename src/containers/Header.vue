<template>
  <div id="header">
    <nav
      class="fixed-top navbar navbar-light"
      v-bind:class="{ active: headerScrolled, inactive: !headerScrolled }"
    >
      <div class="container">
        <a href="https://twine.net" class="navbar-brand">
          <res-img :height="32" :width="111" image="logo" />
        </a>
        <form class="d-flex">
          <action-button label="Apply Now" :url="Links.JOB_LINK" />
        </form>
      </div>
    </nav>
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
  name: "Header",
  props: {},
  data() {
    return {
      Links,
      headerScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      this.headerScrolled = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">

#header {
  padding: 30px 0;
  transition: 0.25s;
}
.inactive {
  transition: 0.25s;
}
.active {
  padding: 15px;
  background: white;
  transition: 0.25s;
  box-shadow: 1px 1px 2px rgba(#322954, 0.2);
}
</style>
