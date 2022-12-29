<script>
    export default {
        mounted() {
            document.querySelector('html').classList.remove('dark-mode')
            document.querySelector('.music-player-modal').style.display = 'none'
        },
    }
</script>

<template>
    <div class="container">
        <div class="image-container">
            <img class="shadow-lg" src="../assets/portfolio/images/Grey Modern Minimalist Cover Page.jpg" alt="">
        </div>
        <div class="info-container">
            <h1>How to make a living freelancing</h1>
            <p>Learn everything you need to work with what you like and choosing when, from where and how to work.
            </p>
            <p>Based on 3 years of experience of a world class freelancer that works from anywhere to anywhere in the world.</p>
            <p class="price">$55</p>
            <button class="go-checkout-btn">Enroll Now <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
    <div class="container-topics">
        <h2>What will your learn on this course?</h2>
        <p>Some of the things you will learn</p>
        <!-- Topic-->
        <div class="topic-container">
            <div class="topic-info">
                <div>
                    <h3>1. How to land your first client without anything to showcase</h3>
                    <p>
                        I will teach you how I searched for my first job, the criteria I used, how I applied, how I convinced the client to hire me, and how you can do the same today.
                    </p>
                </div>
            </div>
            <div class="topic-image"><img src="../assets/portfolio/images/first-job.jpg" alt=""></div>
        </div>
        <!-- Topic-->
        <div class="topic-container wrap-reverse">
            <div class="topic-image"><img src="../assets/portfolio/images/client-reply.jpg" alt=""></div>
            <div class="topic-info">
                <div>
                    <h3>2. How to send an amazing first message + message templates</h3>
                    <p>You will learn how to send a first message that makes the prospects desire to work with you. And how to talk with the prospects until they decide to become your client</p>
                </div>
            </div>
        </div>
        <!-- Topic-->
        <div class="topic-container">
            <div class="topic-info">
                <div>
                    <h3>3. How to create an amazing profile and brand yourself</h3>
                    <p>You will learn how to create a very good profile on freelancing and social platforms and how to have a profile that stands out amongst others.
                    <br>I will show what the prospects value the most the moment they decide to choose a freelancer to solve their problems</p>
                </div>
            </div>
            <div class="topic-image"><img src="../assets/portfolio/images/good-prosal-hint.jpg" alt=""></div>
        </div>
        <!-- Topic-->
        <div class="topic-container wrap-reverse">
            <div class="topic-image"><img src="../assets/portfolio/images/winner-proposal.jpg" alt=""></div>
            <div class="topic-info">
                <div>
                    <h3>4. What winning proposals have in common</h3>
                    <p>I will show winning proposals and why they got me the jobs</p>
                </div>
            </div>
        </div>
        <!-- Topic-->
        <div class="topic-container">
            <div class="topic-info">
                <div>
                    <h3>5. List of hot skills that do not require a college degree and that you can learn for free and monetize in 2-8 months</h3>
                    <p>I will show what skills anyone can learn at home with 2 hours of daily discipline.
                    <br>I will tell how I would organize my learning and what resources I would use to learn them for free and be able to earn 5 to 6 figures per year</p>
                </div>
            </div>
            <div class="topic-image"><img src="../assets/portfolio/images/skill-to-learn.jpg" alt=""></div>
        </div>
        <div class="cta-container">
            <p>Do not miss this opportunity</p>
            <button class="go-checkout-btn">Enroll Now <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        <div>
            <h2>About the Instructor</h2>
            <div class="about-me-container">
                <div class="about-me-image"></div>
                <div class="about-me-info">
                    Edilson Gudo is an author and freelancer that worked with dozens of clients from over four continents in the world. 
                    <br>Some of his clients were based in the USA, Canada, the United Kingdom, Brazil, South Africa, and India.
                    <br>Being a self-taught software developer, landed his first client eight months after his initial contact with coding.
                    <br>Some of his passions include Dance/Electronica, learning, traveling, football and games.  
                </div>
            </div>
        </div>

        <div class="cta-container">
            <p>Do not miss this opportunity</p>
            <button class="go-checkout-btn">Enroll Now <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        <footer>Made with ❤️ by Edilson Gudo</footer>
    </div>
</template>

<style scoped>
@font-face {
  font-family: "Josefin Sans";
  src: url("../assets/portfolio/fonts/JosefinSans-VariableFont_wght.ttf");
}

body {
    font-family: 'Josefin Sans', sans-serif;
}

h1 {
    font-size: 3rem;
    font-weight: bold;
}

h2 {
    font-size: 2rem;
    font-weight: bold;    
}

h3 {
    font-size: 1.25rem;
    font-weight: bold;    
}

img {
    width: 100%;
}

.container {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: rgb(51 65 85);
}

.image-container {
    width: 360px;
    padding: 20px;
}

.info-container {
    text-align: left;
    width: 470px;
    padding: 20px;
    font-family: 'Josefin Sans';
}

.price {
    font-size: 2rem;
    font-size: bolder;
    color: #000;
    margin-top: 15px;
    margin-bottom: 30px;
}

.go-checkout-btn {
    width: 300px;
    padding: 15px 25px;
    background: #000;
    border-radius: 4px;
    font-family: 'Josefin Sans';
}

.container-topics {
    font-family: 'Josefin Sans';
    max-width: 96%;
    margin: 100px auto;
}

.topic-container {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.topic-info {
    display: flex;
    align-items: center;
    width: 640px;
}

.topic-image {
    width: 330px;
    display: flex;
    align-items: center;
}

.wrap-reverse {
    flex-wrap: wrap-reverse;
}

.cta-container {
    margin: 100px auto;
}

.about-me-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px auto;
}

.about-me-info {
    width: 640px;
    text-align: left;
}
.about-me-image {
    background: url(../assets/portfolio/images/Edilson.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50px;
    width: 100px;
    height: 100px;
}
</style>