<template>
  <div class="holder">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 order-1 order-md-1 imageContainer">
          <div class="mt-1 mb-1 my-0-md">
            <res-img image="payment" :width="303" :height="200" />
          </div>
        </div>
        <div class="col-xs-12 col-md-6 order-2 order-md-2">
          <h2>What are we paying?</h2>
          <p>
            <strong>You will be paid $25 for your set of 5 videos.</strong>
          </p>

          <p>Payment is only made on a full set of 5 approved videos.</p>

          <p>
            Videos will go through an approval system with AI Singapore. If one
            or more of your videos is rejected you will be advised and given the
            opportunity to resubmit to be able to obtain payment.
          </p>

          <p>
            Approval is based on whether your videos have met the requirements
            stated within
            <a
              :href="`${publicPath}${Links.ACTORS_INSTRUCTIONS}`"
              target="_blank"
              rel="noopener noreferrer"
              >this document</a
            >
            . Please ensure you have read this in full.
          </p>

          <p>
            Payments are made via the payment method you select under ‘payout
            method’ within your Twine settings.
            <strong>
              Please make sure you have selected an
              <a :href="Links.SETTINGS_PAGE">option here</a> - if not,
              you won’t be paid.
            </strong>
          </p>

          <p>
            Please note we will not be able to make payment via ‘wire transfer’
            for this project. To find out more about our payment methods and
            associated fees please visit
            <a
              :href="Links.PAYMENT_METHODS_HELP"
              target="_blank"
              rel="noopener noreferrer"
              >this help centre article</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResImg from "@c/Common/ResImg.vue";

import Links from "@constants/Links.js";

export default {
  components: {
    ResImg,
  },
  name: "Payment",
  data: function () {
    return {
      Links,
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.holder {
  padding: 50px 0;
}
.imageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
