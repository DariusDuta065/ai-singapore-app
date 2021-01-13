<template>
  <transition
    name="expand"
    v-on:enter="enter"
    v-on:afterEnter="afterEnter"
    v-on:leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: "HeightTransition",
  methods: {
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    leave(element) {
      const height = getComputedStyle(element).height;

      element.style.height = height;
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.25s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>