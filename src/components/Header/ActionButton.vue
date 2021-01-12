<template>
  <button class="btn btn-outline-success" type="button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    label: String,
  },
};
</script>

<style></style>
