<script>
    export default {
        mounted() {
            document.querySelector('html').classList.remove('dark-mode')
            document.querySelector('.music-player-modal').style.display = 'none'
        },
        methods: {
            goToCheckoutPage() {
                this.$router.push({name: 'checkout'})
            }
        },
    }
</script>

<template>
    <div class="wrapper">
        <div class="container wrap-reverse">
            <div class="image-container">
                <img class="shadow-lg" src="../assets/portfolio/images/banner.jpg" alt="">
            </div>
            <div class="info-container">
                <h1>Proven way to earn a living with your profession <span class="emphasis">without a 9-5 job</span></h1>
                <p style="margin: 20px auto;">Learn how to get your first ten clients working with anything you like and make a living from home or travelling the world.
                </p>
                <button @click="goToCheckoutPage" class="go-checkout-btn">Enroll Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        <div class="what-is-freelancer">
            <h2>What is a freelancer?</h2>
            <p>Freelancing is a type of self-employment. Instead of being tied to only one company, freelancers work as self-employed, delivering their services on a contract or project basis.</p>
            <p>Freelancers still work with others. The difference is that they can work for flexible hours, from flexible locations, with flexible projects.</p>
        </div>
        <div class="what-is-freelancer">
            <h2>What type of work a freelancer does?</h2>
            <p> Freelancers can do any work. But the most popular are the ones that can be done remotely, using only a computer.
                Examples include lawyer, programming, designing, video editing, writing, translation, social media, teaching, and many others 
            </p>
        </div>
        <div class="what-is-freelancer">
            <h2>Who is this course for?</h2>
            <p><i class="fas fa-check"></i> This course is for every people that love geographic freedom and would like to have the freedom to choose where to work from</p>
            <p><i class="fas fa-check"></i> This course is for every people that would like to make a living in another currency such as USD, Euro or GPD</p>
            <p><i class="fas fa-check"></i> This course is for everyone that wants to learn or already has a skill that does not require a college degree and wants to make a living off it. Eg: A video editing professional</p>
            <p><i class="fas fa-check"></i> This course is for everyone that wants to make an extra income</p>        
        </div>
        <div class="container-topics">
            <h2>What will you learn in this course?</h2>
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
                        <h3>2. How to send a persuasive first message + message templates</h3>
                        <p>You will learn how to send a first message that makes the prospects desire to work with you. And how to talk with the prospects until they decide to become your client</p>
                    </div>
                </div>
            </div>
            <!-- Topic-->
            <div class="topic-container">
                <div class="topic-info">
                    <div>
                        <h3>3. How to create a good profile and brand yourself</h3>
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
                        <h3>4. What winner proposals have in common</h3>
                        <p>I will show my best proposals and why they got me the jobs</p>
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
            <!-- Topic-->
            <div class="topic-container">
                <div class="topic-info">
                    <div>
                        <h3>6. I will show the errors freelancers make that prevent them from making money</h3>
                        <p>I will show errors freelancers make in disciplining themselves, setting up their profiles, choosing jobs, applying for jobs, talking with clients, and negotiating with clients,
                            which ends in a loss of potential money or loss and reputation for the freelancer, so you can successfully avoid them.</p>
                    </div>
                </div>
                <div class="topic-image"><img src="../assets/portfolio/images/mistakes.jpg" alt=""></div>
            </div>
            <div class="cta-container">
                <!-- <p class="price">$55</p> -->
                <p>Do not miss this opportunity</p>
                <button @click="goToCheckoutPage" class="go-checkout-btn">Enroll Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div>
                <h2>About the Instructor</h2>
                <div class="about-me-container">
                    <div class="about-me-image"></div>
                    <div class="about-me-info">
                        Edilson Gudo is an author and freelancer that worked with dozens of clients from over four continents. 
                        <br>Some of his clients were from the USA, Canada, the United Kingdom, Brazil, South Africa, and India.
                        <br>Being a self-taught software developer landed his first client eight months after his initial contact with coding.
                        <br>His passions include Dance/Electronica, learning, traveling, football and games.  
                    </div>
                </div>
            </div>

            <div class="cta-container">
                <p>Do not miss this opportunity</p>
                <button @click="goToCheckoutPage" class="go-checkout-btn">Enroll Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <footer>Made with ❤️ by Edilson Gudo</footer>
        </div>
    </div>
</template>

<style scoped>
@font-face {
  font-family: "Josefin Sans";
  src: url("../assets/portfolio/fonts/JosefinSans-VariableFont_wght.ttf");
}

body, div, p {
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
    border-radius: 6px;
    font-family: 'Josefin Sans';
    background: #34ba08;
}

.emphasis {
    color: #34ba08;
}

.what-is-freelancer {
    margin: 50px auto;
    max-width: 940px;
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

@media only screen and (max-width: 800px) {
  .wrapper {
    margin: 0 auto;
    max-width: 96%;
  }
  h1 {
    font-size: 2rem;
  } 
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.125rem;
  } 
}
</style>