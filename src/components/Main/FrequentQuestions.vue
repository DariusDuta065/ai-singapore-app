<template>
  <div class="holder">
    <div class="container">
      <h2 class="text-center">FAQ's</h2>

      <div class="col-xs-12 offset-md-3 col-md-6">
        <accordion
          v-for="item in accordionItems"
          :key="item.tile"
          :title="item.title"
          :answer="item.answer"
        />
      </div>

      <div class="text-center mt-4">
        <action-button label="Apply Now" :url="Links.JOB_LINK" />
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@c/Header/ActionButton";
import Accordion from "@c/Common/Accordion.vue";

import Links from "@constants/Links.js";

export default {
  name: "FrequentQuestions",
  components: {
    ActionButton,
    Accordion,
  },
  data: function () {
    return {
      Links,
      accordionItems: [
        {
          title: `Can I submit more than 5 videos?`,
          answer: `
            <p>You can, but you would only be paid for 5 at the $25 rate that has been advised</p>
          `,
        },
        {
          title: `Can I submit fewer than 5 videos?`,
          answer: `
            <p>No - you have to submit 5 videos to be eligible for payment</p>
          `,
        },
        {
          title: `How do I take part?`,
          answer: `
            <p>Please click ‘apply’ which will direct you to the job post on Twine. Here you will 
            be instructed to pitch on a job and a member of our team will be in touch if you have 
            been successful.</p>
          `,
        },
        {
          title: `How do I submit my videos?`,
          answer: `
            <p>Information on submission will be provided to you once you have pitched on the job.</p>
          `,
        },
        {
          title: `Why was my pitch rejected?`,
          answer: `
            <p>We are looking for people of specific demographics to take part in this project. If 
            you are rejected we may have already fulfilled this demographic. You are welcome to ask for feedback.</p>
            <p>Additionally you need to ensure your pitch is of quality and provides details on your suitability for this work. Please note the instructions on the job brief.</p>
          `,
        },
        {
          title: `What device is required for filming?`,
          answer: `
            <p>Your videos can be filmed on a mobile phone as long as specifications are met, such 
            as MP4 format, resolution of 1080p and a frame rate of 24 and audio is a bit depth of 
            32 bits per sample and a sampling rate of 44.1kHz. These are standard specifications on 
            most devices.</p>
          `,
        },
        {
          title: `Why do I need a Twine account?`,
          answer: `
            <p>This project is run through Twine and to be able to pitch on the job you must have 
            an account. Payment will also be made via your Twine account.</p>
            <p>Please <a href="https://twine.net/signup" target="_blank" rel="noopener noreferrer">sign up 
            here</a>.</p>
          `,
        },
        {
          title: `What language needs to be spoken in the videos?`,
          answer: `
            <p><b>You must speak in English</b></p>
            <p>Please <a href="https://twine.net/signup" target="_blank" rel="noopener noreferrer">sign up 
            here</a>.</p>
          `,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.holder {
  padding: 20px 0 50px 0;
}
</style>