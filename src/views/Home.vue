<template>
  <div id="home">
    <div class="hero-image">
        <div class="hero-text" style="top:30%">
           <h1 style="font-size:80px" class="title_text">More Clay</h1>
           <h1 style="font-size:80px" class="title_text">More Fun</h1>
        </div>
        <v-btn class="hero-text" style="top:90%" large color="orange">Get Swingshot<v-icon style="padding-left: 5px;">fas fa-angle-double-right</v-icon></v-btn>
    </div>
      <v-row
        align="center"
        justify="center">
        <v-col class="text-center" cols="5">
            <h2 class="title_text">Get Swinging</h2>
            <h2>Swing into action with the Swingshot!</h2>
            <br><br>
        </v-col>
      </v-row>
      <v-row>
          <v-col class="text-right" cols="4">
              <v-icon color="orange">mdi-checkbox-multiple-blank-circle-outline</v-icon><br>
              <h3 class="title_text">Multiple Pigeons</h3>
              <p style="font-size:20px;">Unlike other throwers, the Swingshot <br> can throw up to 3 clay pigeons at once!</p>
              <br><br>
              <v-icon color="orange">mdi-feather</v-icon><br>
              <h3 class="title_text">Lightweight & Portable</h3>
              <p style="font-size:20px;">Its light design makes it <br> perfect for on-the-go shooting.</p>
              <br><br>
          </v-col>
          <v-col align="center" justify="center">
            <v-img style="width:40px; height:30vh;" src="../../public/bad_thrower.jpg"></v-img>
          </v-col>
          <v-col class="text-left" cols="4">
              <v-icon color="orange">fas fa-dumbbell</v-icon><br>
              <h3 class="title_text">Durable</h3>
              <p style="font-size:20px;">The Swingshot is durable and <br> even works well in cold weather.</p>
              <br><br>
              <v-icon color="orange">fas fa-bullseye</v-icon><br>
              <h3 class="title_text">Easy-To-Use</h3>
              <p style="font-size:20px;">If you can swing a bat<br> you can use the Swingshot.</p>
          </v-col>
      </v-row>
      <div class="hero-image">
        <div class="hero-text" style="top:40%">
           <h1 style="font-size:70px" class="title_text">Take Your Shot</h1>
            <p style="font-size: 20px;">Throw more pigeons and take more epic shots!</p>
        </div>
      </div>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="5">
            <h2 class="title_text">Why Swingshot?</h2>
            <h2>Every great shooter needs a great thrower</h2>
            <br><br>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="4">
            <v-icon color="orange">fas fa-ruler-combined</v-icon><br>
            <h3 class="title_text">Perfect Angle</h3>
            <p style="font-size:20px;">Throws perfectly angled pigeons. <br>Great for target practice.</p>
            <br><br>
            <v-icon color="orange">fas fa-ruler</v-icon><br>
            <h3 class="title_text">Go the Distance</h3>
            <p style="font-size:20px;">Near or far, the Swingshot<br> can get it there.</p>
            <br><br>
        </v-col>
        <v-col class="text-center" cols="4">
            <v-icon color="orange">fas fa-thumbs-up</v-icon><br>
            <h3 class="title_text">Intuitive</h3>
            <p style="font-size:20px;">Throwing feels natural,<br> as it should feel.</p>
            <br><br>
            <v-icon color="orange">fas fa-dollar-sign</v-icon><br>
            <h3 class="title_text">Affordable</h3>
            <p style="font-size:20px;">More bang for your buck, <br> quite literally.</p>
            <br><br>
        </v-col>
        <v-col class="text-center" cols="4">
            <v-icon color="orange">fas fa-briefcase</v-icon><br>
            <h3 class="title_text">Portable</h3>
            <p style="font-size:20px;">Take it anywhere.<br>(Where shooting is allowed)</p>
            <br><br>
            <v-icon color="orange">fas fa-dot-circle</v-icon><br>
            <h3 class="title_text">3 Birds, 1 Stone</h3>
            <p style="font-size:20px;">Throw more pigeons,<br>take better shots.</p>
            <br><br>
        </v-col>
      </v-row>
      <div class="hero-image">
        <div class="hero-text" style="top:40%">
           <h1 style="font-size:70px" class="title_text">Every day is shooting day</h1>
            <p style="font-size: 20px;">Swingshot works anytime, anywhere</p>
        </div>
      </div>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="5">
            <h2 class="title_text">Still Here?</h2>
            <h2>Go out shooting with the Swingshot!</h2>
            <br><br>
            <v-btn large color="orange">Get Swingshot<v-icon style="padding-left: 5px;">fas fa-angle-double-right</v-icon></v-btn>
            <v-img  src="../../public/bad_thrower.jpg"></v-img>
        </v-col>
      </v-row>
    

  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
.title_text{
    font-family: 'Bowlby One SC', cursive;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../public/shooting.jpg');
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
</style>
