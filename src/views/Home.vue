<template>
  <div id="home">
    <div class="video-container">
      <video autoplay muted loop id="myVideo">
        <source src="../../public/promo.mp4" type="video/mp4" />Your browser does not support HTML5 video.
      </video>
      <div class="video-shade"></div>
      <div class="hero-text" style="top:40%">
        <h1 class="title_text overlay-text hide-mobile">The perfect throw</h1>
        <h1 class="title_text overlay-text hide-mobile">Every. Single. Time.</h1>
        <br />
        <v-btn class="hide-mobile" @click="$router.push('shop')" x-large color="orange">
          Buy Swing-Shot
          <v-icon style="padding-left: 5px;">fas fa-angle-double-right</v-icon>
        </v-btn>
      </div>
    </div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <div class="title_text main-text">Swing-Shot</div>
        <div class="title_text sub-text">Revolutionizing clay pigeon throwing</div>
        <div class="video-center">
          <iframe
            width="900"
            height="508"
            src="https://www.youtube.com/embed/M3AbMA1VUis"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <v-btn class="mobile-button" @click="$router.push('shop')" x-large color="orange">
          Buy Swing-Shot
          <v-icon style="padding-left: 5px;">fas fa-angle-double-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <div class="hero-image">
      <div class="hero-text" style="top:40%">
        <h1
          class="title_text overlay-text"
        >Simple design makes throwing 1, 2, and 3 clay pigeons efortless</h1>
        <br />
        <v-btn @click="$router.push('shop')" x-large color="orange">
          Buy Swing-Shot
          <v-icon style="padding-left: 5px;">fas fa-angle-double-right</v-icon>
        </v-btn>
      </div>
    </div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="8">
        <div class="title_text main-text">Why Swing-Shot?</div>
        <div class="title_text sub-text">Every great shooter needs a great thrower</div>
        <br />
        <br />
      </v-col>
    </v-row>
    <v-row>
      <!-- *** COLUMN 1 *** -->
      <v-col class="text-center" cols="6" md="4">
        <v-icon color="orange">mdi-checkbox-multiple-blank-circle-outline</v-icon>
        <br />
        <h1 class="title_text">Multiple Pigeons</h1>
        <p style="font-size:20px;">
          Throw up to 3
          <br />clay pigeons at once!
        </p>
        <br />
        <br />
        <v-icon color="orange">fa fa-sign-language</v-icon>
        <br />
        <h1 class="title_text">Ambidextrious</h1>
        <p style="font-size:20px;">
          Use with your right or
          <br />left hand.
        </p>
        <br />
        <br />

        <v-icon color="orange">fas fa-ruler</v-icon>
        <br />
        <h1 class="title_text">Go the Distance</h1>
        <p style="font-size:20px;">
          Near or far, the Swing-Shot
          <br />can get it there.
        </p>
        <br />
        <br />
      </v-col>
      <!-- *** COLUMN 2 *** -->
      <v-col class="text-center" cols="6" md="4">
        <v-icon color="orange">fas fa-bullseye</v-icon>
        <br />
        <h1 class="title_text">Easy-To-Use</h1>
        <p style="font-size:20px;">
          If you can swing a bat
          <br />you can use the Swing-Shot.
        </p>
        <br />
        <br />
        <v-icon color="orange">fas fa-dumbbell</v-icon>
        <br />
        <h1 class="title_text">Durable</h1>
        <p style="font-size:20px;">
          Performs the same in cold weather
          <br />and will last a life time.
        </p>
        <br />
        <v-icon color="orange">fas fa-dollar-sign</v-icon>
        <br />
        <h1 class="title_text">Affordable</h1>
        <p style="font-size:20px;">
          More bang for your buck,
          <br />quite literally.
        </p>
        <br />
        <br />
      </v-col>
      <!-- *** COLUMN 3 *** -->
      <v-col class="text-center hide-md" cols="6" md="4">
        <v-icon color="orange">fas fa-ruler-combined</v-icon>
        <br />
        <h1 class="title_text">Perfect Angle</h1>
        <p style="font-size:20px;">
          Throws perfectly angled pigeons.
          <br />Great for target practice.
        </p>
        <br />
        <br />
        <v-icon color="orange">fas fa-briefcase</v-icon>
        <br />
        <h1 class="title_text">Portable</h1>
        <p style="font-size:20px;">
          Handheld thrower provides
          <br />easy access.
        </p>
        <br />
        <br />

        <v-icon color="orange">fas fa-thumbs-up</v-icon>
        <br />
        <h1 class="title_text">Intuitive</h1>
        <p style="font-size:20px;">
          Throwing feels natural,
          <br />as it should feel.
        </p>
        <br />
        <br />
      </v-col>
    </v-row>
    <div class="hero-image">
      <div class="hero-text" style="top:40%">
        <h1 class="title_text overlay-text">Every day is shooting day</h1>
        <h1 class="title_text overlay-text">Get yours now</h1>
        <br />
        <v-btn @click="$router.push('shop')" x-large color="orange">
          Buy Swing-Shot
          <v-icon style="padding-left: 5px;">fas fa-angle-double-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
/* #home {
  width: 102vw;
} */

.overlay-text {
  font-size: 64px;
}
.main-text {
  font-size: 100px;
}
.sub-text {
  font-size: 40px;
}
.video-container {
  /* height: 100vh; */
  overflow: hidden;
  background-color: rgba(0, 0, 0);
  position: relative;
}
.video-shade {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
#myVideo {
  /* position: fixed; */
  /* width: 10; */
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
.title_text {
  font-family: "Bebas Neue";
  font-weight: 700;
}
.highlights-img {
  position: relative;
  /* max-height: 100%; */
  width: 220px;
  border-radius: 8px;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../public/swingshot3.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
.video-center {
  margin: 24px 24px 24px 24px;
  text-align: center;
}
.mobile-button {
  margin-top: 16px;
  margin-bottom: 16px;
  visibility: hidden;
}
.show-only-mobile {
  visibility: hidden;
}

@media (max-width: 960px) {
  .overlay-text {
    font-size: 48px;
  }
  .main-text {
    font-size: 48px;
  }
  .sub-text {
    font-size: 40px;
  }
  iframe {
    width: 500px;
    height: 271px;
  }
  .hide-md {
    visibility: hidden;
    height: 0px;
  }
}
@media (max-width: 600px) {
  .show-only-mobile {
    visibility: visible;
  }
  .overlay-text {
    font-size: 32px;
  }
  iframe {
    width: 300px;
    height: 169px;
  }
  .main-text {
    font-size: 32px;
  }
  .sub-text {
    font-size: 24px;
  }
  .hide-mobile {
    visibility: hidden;
  }
  .mobile-button {
    visibility: visible;
  }
}
</style>
