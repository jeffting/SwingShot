<template>
    <div id="reviews" style="margin-top: 90px;">
        <div style="display:flex;">
            <div style="flex-flow:row; justify-content:space-around;">
                <!-- <div>
                    <h3>Swingshot <br>reviews: Hear<br> from our<br> customers</h3>
                    <v-divider></v-divider>
                    <v-rating v-model="totalRating"></v-rating>
                    <div id="player"></div>
                </div>
                <div>
                    <div>ok</div>
                </div> -->
                <div>OK</div>
                <div>GET</div>
            </div>
        </div>
        <!-- <v-row>
            <v-col cols="12">
                <v-row align="center" justify="center">
                    <div>
                        <h3>Swingshot <br>reviews: Hear<br> from our<br> customers</h3>
                        <v-divider></v-divider>
                        <v-rating v-model="totalRating"></v-rating>
                    </div>
                </v-row>
            </v-col>
        </v-row> -->
            <!-- <h1>ok</!-->
    </div>
</template>
<script src='https://www.youtube.com/iframe_api' async></script>
<script>
export default {
    name: "reviews",
    data(){
        return {
            allReviews: [
                {
                    date: new Date(),
                    stars: 5,
                    reviewerName: "Bart May",
                    source: "Site",
                    title: "Best Hand Thrower Ever Made",
                    reviewText: "This is by far the best hand held pigeon thrower I have ever used."
                },
                {
                    date: new Date(2011-11-11),
                    stars: 4,
                    reviewerName: "Lisa Lampanelli",
                    source: "Amazon",
                    title: "Meh, it's good",
                    reviewText: "My 9-yea-old is too small for it"
                }
            ],
            totalRating: 4.5
        }
    },
    mounted(){
        const YTPlayer = require('yt-player');
        const player = new YTPlayer('#player');
        player.load('M3AbMA1VUis');
    }
}
</script>