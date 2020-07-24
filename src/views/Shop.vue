<template>
  <div>
    <div class="buy-image">
      <div class="hero-text title_text" style="font-size: 72px">Shop Swing-Shot</div>
    </div>
    <v-row justify="center">
      <v-col v-for="(thrower, index) in throwers" :key="index" cols="11" md="4">
        <v-card class="card">
          <v-img :src="thrower.image"></v-img>
          <h1 class="title_text">{{thrower.title}}</h1>
          <h2>${{thrower.price}}</h2>
          <v-btn v-on:click="addToCart(thrower)" class="white--text" color="green">
            Add to Cart
            <v-icon style="padding-left: 5px;">fa fa-shopping-cart</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="11" md="8">
        <v-card class="cart-item" v-for="(item, index) in cart" :key="index">
          <v-row align="center">
            <v-col>
              <h2>${{item.price}}</h2>
            </v-col>
            <v-col align="center">
              <h2>{{item.title}}</h2>
            </v-col>
            <v-col align="right">
              <v-btn v-on:click="removeFromCart(index)" fab color="red">
                <v-icon>fa fa-times</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-top: 24px;">
      <v-btn
        @click="goToCheckout()"
        v-if="cart.length > 0"
        x-large
        color="blue"
        class="white--text"
      >
        Checkout ({{cart.length}})
        <v-icon style="padding-left: 5px;">fa fa-shopping-cart</v-icon>
      </v-btn>
    </v-row>
    <div style="height: 64px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      throwers: [
        {
          title: "Hunter Orange",
          image: require("../../public/orange-thrower.png"),
          price: 22,
        },
        {
          title: "Green",
          image: require("../../public/green-thrower.png"),
          price: 22,
        },
      ],
    };
  },
  methods: {
    addToCart(thrower) {
      this.cart.push(thrower);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    goToCheckout() {
      this.$router.push({ name: "Checkout", params: { cart: this.cart } });
    },
  },
};
</script>
<style>
.buy-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../public/tetons.jpg");
  height: 50vh;
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 24px;
}
.card {
  height: 100%;
  text-align: center;
  padding-bottom: 24px;
  /* min-width: 172px;
  max-width: 360px !important; */
}
.cart-item {
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 8px;
}
</style>