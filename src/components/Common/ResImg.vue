<template>
  <picture>
    <source
      v-if="getExts().includes('webp')"
      :src="getSrc('webp')"
      :alt="getAlt()"
      :sizes="getSize()"
      :srcset="getSrcSet('webp')"
    />
    <source
      :src="getSrc()"
      :alt="getAlt()"
      :sizes="getSize()"
      :srcset="getSrcSet()"
    />
    <img
      :src="getSrc()"
      :alt="getAlt()"
      :sizes="getSize()"
      :srcset="getSrcSet()"
    />
  </picture>
</template>

<script>
export default {
  name: "ResImg",
  props: {
    image: {
      type: String,
    },
  },
  data() {
    return {
      images: {
        checklist: {
          exts: ["webp", "png"],
          alt: "Checklist",
          sizes: "(max-width: 1200px) 200px, 300px",
          srcSet: [50, 249, 302, 386, 788],
        },
      },
    };
  },
  methods: {
    getSize() {
      return this.images[this.image].sizes;
    },
    getExts() {
      return this.images[this.image].exts;
    },
    getSrc(ext = null) {
      const { srcSet, exts } = this.images[this.image];

      if (ext === null) {
        if (exts.includes("png")) {
          ext = "png";
        } else if (exts.includes("jpg")) {
          ext = "jpg";
        } else if (exts.includes("jpeg")) {
          ext = "jpeg";
        }
      }

      const srcW = srcSet[srcSet.length - 1];
      return `@img/${this.image}/${this.image}_w_${srcW}.${ext}`;
    },
    getSrcSet(ext = null) {
      const { srcSet, exts } = this.images[this.image];

      if (ext === null) {
        if (exts.includes("png")) {
          ext = "png";
        } else if (exts.includes("jpg")) {
          ext = "jpg";
        } else if (exts.includes("jpeg")) {
          ext = "jpeg";
        }
      }

      const srcSetString = [];
      for (const srcW of srcSet) {
        const img = require(`@img/${this.image}/${this.image}_w_${srcW}.${ext}`);
        srcSetString.push(`${img} ${srcW}w`);
      }
      return srcSetString.join(`, `);
    },
    getAlt() {
      return this.images[this.image].alt;
    },
  },
};
</script>

<style></style>
