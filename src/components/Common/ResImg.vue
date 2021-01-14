<template>
  <picture>
    <source
      v-if="getExts().includes('webp')"
      :alt="getAlt()"
      :sizes="getSize()"
      :srcset="getSrcSet('webp')"
    />
    <source :alt="getAlt()" :sizes="getSize()" :srcset="getSrcSet()" />
    <img
      :width="this.width"
      :height="this.height"
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
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  data() {
    return {
      images: {
        logo: {
          exts: ["webp", "png"],
          alt: "Twine Logo",
          sizes: "(max-width: 768px) 35vw, 278px",
          srcSet: [111, 278, 556, 834, 1112],
        },
        checklist: {
          exts: ["webp", "png"],
          alt: "Checklist",
          sizes: "(max-width: 768px) 35vw, 386px",
          srcSet: [50, 249, 302, 386, 788],
        },
        payment: {
          exts: ["webp", "png"],
          alt: "Payment",
          sizes: "(max-width: 768px) 35vw, 588px",
          srcSet: [78, 196, 392, 588, 784],
        },
        "creative-and-buyer": {
          exts: ["webp", "png"],
          alt: "Creative and buyer",
          sizes: "(max-width: 768px) 100vw, 427px",
          srcSet: [85, 214, 427, 854],
        },
        "creative-equipment": {
          exts: ["webp", "png"],
          alt: "Creative equipment",
          sizes: "(max-width: 768px) 35vw, 552px",
          srcSet: [74, 184, 368, 552, 736],
        },
        "video-play": {
          exts: ["webp", "png"],
          alt: "Video specifications",
          sizes: "(max-width: 768px) 35vw, 263px",
          srcSet: [35, 88, 175, 263, 350],
        },
        "creatives-background-pattern": {
          exts: ["webp", "png"],
          alt: "Creatives Pattern",
          sizes: "(max-width: 768px) 35vw, 469px",
          srcSet: [313, 469, 625],
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
