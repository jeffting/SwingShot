<template>
    <div id="reviews" style="margin-top: 90px;">
        <div id="hero-background">

        </div>
        <div style="display:flex; justify-content:space-around;">
            <div style="display:flex; flex-direction:column; justify-content: space-around">
                <h1>Swingshot <br>reviews: Hear<br> from our<br> customers</h1>
                <v-divider></v-divider>
                <div>
                    <v-rating v-model="totalRating"></v-rating>
                    <h3>{{totalRating}} average rating from {{totalReviewNumbers}} customer reviews</h3>
                </div>
            </div>
            <div>
                <div id="player"></div>
            </div>
        </div>
        <div style="display:flex; justify-content:center; margin-top: 30px;">
            <h2>Over {{salesNumber}} people are enjoying shooting with the Swingshot. In fact, they swing by to tell us how much fun they had.</h2>
        </div>
        <div v-for="review in allReviews" :key="review.title + review.reviewText" style="display:flex; justify-content:center;flex-direction:column; margin-left: 10%; margin-right: 10%; margin-top: 30px;">
            <v-divider></v-divider>
            <div style="display:flex; justify-content:space-between; padding-top: 10px;">
                <div style="display:flex; flex-direction:column; justify-content: space-around">
                    <v-rating v-model="review.stars"></v-rating>
                    <div style="margin-left:10px;">
                        {{review.date}}<br>
                        {{review.reviewerName}}
                    </div>
                </div>
                <div style="flex-basis: 50%;flex-grow: 0; flex-shrink: 0;">
                    <p style="font-size: 15pt;">{{review.reviewText}}</p>
                </div>
            </div>
        </div>
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
                    date: new Date().toISOString().substr(0,10),
                    stars: 5,
                    reviewerName: "Bart May",
                    source: "Site",
                    title: "Best Hand Thrower Ever Made",
                    reviewText: "This is by far the best hand held pigeon thrower I have ever used."
                },
                {
                    date: new Date(2011-11-11).toISOString().substr(0,10),
                    stars: 4,
                    reviewerName: "Lisa Lampanelli",
                    source: "Amazon",
                    title: "Meh, it's good",
                    reviewText: "My 9-yea-old is too small for it"
                }
            ],
            totalRating: 4.5,
            totalReviewNumbers: 10,
            salesNumber: 100
        }
    },
    mounted(){
        const YTPlayer = require('yt-player');
        const player = new YTPlayer('#player');
        player.load('M3AbMA1VUis');
    }
}
</script>
<style>
    .hero-background{
        background-color: orange;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        padding-top: 66.64%;
    }
</style>