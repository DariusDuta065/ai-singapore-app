<template>
  <a
    v-bind:href="url"
    class="btn btn-primary btn-sm actionButton"
    role="button"
    target="_blank"
    aria-disabled="true"
    rel="noopener noreferrer"
  >{{ label }}</a>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    label: String,
    url: String,
  },
};
</script>

<style lang="scss" scoped>
  .actionButton {
    font-weight: 700;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    line-height: 20px;
  }
</style>
