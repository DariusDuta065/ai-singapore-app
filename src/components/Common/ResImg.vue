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
        logo: {
          exts: ["webp", "png"],
          alt: "Twine Logo",
          sizes: "(max-width: 1200px) 100px, 100px",
          srcSet: [111, 278, 556, 834, 1112],
        },
        checklist: {
          exts: ["webp", "png"],
          alt: "Checklist",
          sizes: "(max-width: 1200px) 200px, 300px",
          srcSet: [50, 249, 302, 386, 788],
        },
        payment: {
          exts: ["webp", "png"],
          alt: "Payment",
          sizes: "(max-width: 1200px) 200px, 300px",
          srcSet: [78, 196, 392, 588, 784],
        },
        "creative-and-buyer": {
          exts: ["webp", "png"],
          alt: "Creative and buyer",
          sizes: "(max-width: 1200px) 200px, 300px",
          srcSet: [85, 214, 427, 854],
        },
        "creative-equipment": {
          exts: ["webp", "png"],
          alt: "Creative equipment",
          sizes: "(max-width: 1200px) 350px, 400px",
          srcSet: [74, 184, 368, 552, 736],
        },
        "video-play": {
          exts: ["webp", "png"],
          alt: "Video specifications",
          sizes: "(max-width: 1200px) 350px, 350px",
          srcSet: [35, 88, 175, 263, 350],
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
