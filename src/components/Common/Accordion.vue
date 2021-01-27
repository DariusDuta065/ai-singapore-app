<template>
  <div class="accordion-container">
    <div>
      <div class="accordion-header d-flex" :onClick="openAccordion">
        <div class="accordion-header-title">
          {{ title }}
        </div>
        <div class="accordion-header-caret ms-auto ps-2">
          <img
            v-if="isOpen"
            :src="caretUpIcon"
            :width="16"
            :height="16"
            alt="Close accordion"
          />
          <img
            v-if="!isOpen"
            :src="caretDownIcon"
            :width="16"
            :height="16"
            alt="Open accordion"
          />
        </div>
      </div>
      <height-transition>
        <div v-if="isOpen" class="accordion-content-container">
          <div class="accordion-content">
            <span v-html="answer" />
          </div>
        </div>
      </height-transition>
    </div>
  </div>
</template>

<script>
import HeightTransition from "@c/Common/HeightTransition.vue";

export default {
  name: "Accordion",
  components: {
    HeightTransition,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    answer: {
      type: String,
      default: "",
    },
  },
  data: function () {
    return {
      isOpen: false,
      caretUpIcon: require("@img/svg/caret-up-fill.svg"),
      caretDownIcon: require("@img/svg/caret-down-fill.svg"),
    };
  },
  methods: {
    openAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion-container {
  width: 100%;
  margin: 0 auto;
  max-width: 450px;
  padding: 10px 0;

  .accordion-header {
    cursor: pointer;
    padding: 12px 15px;
    background: #eeeeee;

    .accordion-header-title {
      font-size: 1.1rem;
    }
  }

  .accordion-content-container {
    font-size: 1rem;
    border: 1px solid #eeeeee;

    .accordion-content {
      padding: 20px 20px 12px 20px;
    }
  }
}
</style>