<template>
  <div>
    <div style="height: 64px"></div>
    <div class="flex-form-container">
      <div class="form-container">
        <form id="payment-form">
          <div id="card-element">
            <!--Stripe.js injects the Card Element-->
          </div>
          <!-- <button id="submit">
          <div class="spinner hidden" id="spinner"></div>
          <span id="button-text">Pay</span>
        </button>
        <p id="card-error" role="alert"></p>
        <p class="result-message hidden">
          Payment succeeded, see the result in your
          <a href target="_blank">Stripe dashboard.</a> Refresh the page to pay again.
          </p>-->
        </form>
      </div>
    </div>
    <v-row justify="center">Total</v-row>
    <v-row justify="center">
      <v-col cols="11" md="6">
        <v-card class="cart-item" v-for="(item, index) in $attrs.cart" :key="index">
          <v-row align="center">
            <v-col>
              <h2>${{item.price}}</h2>
            </v-col>
            <v-col align="center">
              <h2>{{item.title}}</h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stripe: "",
    };
  },
  beforeCreate() {
    this.cart = this.$attrs.cart;
  },
  mounted() {
    this.stripe = window.Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    const data = { clientSecret: "test" };
    var elements = this.stripe.elements();
    var style = {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    };
    var card = elements.create("card", { style: style });
    // Stripe injects an iframe into the DOM
    card.mount("#card-element");
    card.on("change", function (event) {
      // Disable the Pay button if there are no card details in the Element
      document.querySelector("button").disabled = event.empty;
      document.querySelector("#card-error").textContent = event.error
        ? event.error.message
        : "";
    });
    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Complete payment when the submit button is clicked
      this.payWithCard(this.stripe, card, data.clientSecret);
    });
  },
  methods: {
    payWithCard(stripe, card, clientSecret) {
      console.log(stripe, card, clientSecret);
    },
  },
};
</script>
<style>
.form-container {
  width: 600px;
  /* background-color: gray; */
}
.flex-form-container {
  display: flex;
  justify-content: center;
}
</style>