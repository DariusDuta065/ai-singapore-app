<template>
  <div class="footer">
    <div class="container">
      <div class="text-light">© Clowdy Ltd. t/a Twine</div>
    </div>
    <intercom />
  </div>
</template>

<script>
import Intercom from "@c/Common/Intercom.vue";

export default {
  components: { Intercom },
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background: #110b29;
  padding: 20px;
}
</style>