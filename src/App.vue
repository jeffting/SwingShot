<template>
  <v-app>
    <v-app-bar app elevate-on-scroll color="rgba(0, 0, 0, 0.6)">
      <v-app-bar-nav-icon class="show-only-mobile" @click="drawer = true" color="white"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-btn x-large text color="white" @click="$router.push('/')">Swing-Shot</v-btn>
      </div>

      <v-btn class="hide-mobile" large text color="white" @click="$router.push('shop')">shop</v-btn>
      <v-btn class="hide-mobile" large text color="white" @click="$router.push('about')">Learn More</v-btn>

      <!-- <v-btn @click="$router.push('reviews')" large text color="white">Reviews</v-btn> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-orange--text text--accent-4">
          <v-list-item @click="$router.push('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Swing-Shot</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('shop')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shop</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('about')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Learn More</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h2 class="title_text">Contact us</h2>
        <h2>swingshotcpt@gmail.com</h2>
        <br />
        <br />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

