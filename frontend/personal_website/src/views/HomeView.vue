<script>
import PreLoading from "@/components/PreLoading";
export default {
  components: {
    PreLoading,
  },
};
</script>

<template>
  <PreLoading />
  <section class="first-section">
    <div class="container">
      <div class="">
        <div class="profile-img"></div>
      </div>
      <h1 class="title">I'm Edilson</h1>
      <h2 class="secondary-title">Fullstack Developer</h2>
      <p>
        "Edilson is a great and humble fullstack developer, always eagle to learn new technologies.
        He is a master of Vue and python and, utilizes Django as backend framework. 
        " - <a href="https://www.linkedin.com/in/renzi-fidele-4886151bb">Renzi Fidele</a>
      </p>
      <div class="socialmedias">
        <a href="https://linkedin.com/in/cristiangudo"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="https://github.com/edilsongudo"
          ><i class="fab fa-github"></i
        ></a>
        <a href="https://www.youtube.com/watch?v=XE4ime8hCxE&t=0s"
          ><i class="fab fa-youtube"></i
        ></a>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <h2 class="secondary-title"></h2>
      <p>Everything is much better with music so built a music player for this website 
        so you can enjoy some of my favourite songs.</p>
      <p>My favourite music genre is dance/electronica.</p>
    </div>
  </section>

  <section class="second-section">
    <div class="container" data-aos="fade-up">
      <h2 class="title">Portfolio</h2>
      <p>Here you can get to know some of my past works</p>
      <!-- Project -->
      <div class="project" data-aos="fade-up">
        <h5>Online Transcription Tool</h5>
        <p>
          A web app that allows users to drag and drop an audio or video file
          and export the transcription. Built with Vue.js, Celery and Django
        </p>
        <!-- <button class="tellmore" id="tm1">Read more</button> -->
        <div>
          <div>
            <video width="320" height="240" controls>
              <source
                src="../assets/portfolio/videos/199839219-45d0fc04-f5a5-4123-93cc-5fd119af3075.mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <!-- End of Project -->

      <!-- Project -->
      <div class="project" data-aos="fade-up">
        <h5>Linktree clone</h5>
        <p>
          selflink.co is powerful link in bio platform powered by Django backend and that
          integrates with PayPal Subscritions API
          <br /><a href="https://selflink.co/" target="_blank" rel=""
            >Live link 🔗</a
          >
          <br /><a href="https://selflink.co/to/c8d69/" target="_blank" rel=""
            >Project Demo 🔗</a
          >
        </p>
        <!-- <button class="tellmore" id="tm2">Read more</button> -->
        <div>
          <div class="embed">
            <img
              src="../assets/portfolio/images/selflink-selenagomez.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../assets/portfolio/images/selflink-customize.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../assets/portfolio/images/selflink-settings.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../assets/portfolio/images/selflink-dash.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../assets/portfolio/images/selflink-dash2.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../assets/portfolio/images/selflink-socials.webp"
              alt="selflink.co banner"
            />
          </div>
        </div>
      </div>
      <!-- End of Project -->

      <!-- Project -->
      <div class="project" data-aos="fade-up">
        <h5>Password Manager</h5>
        <p>
          An app where users only need to create and remember one master
          password to safely store other ones.
          <br />Uses AES encryption. Built with Vue.js and Django. <br /><a
            href="https://selflink.co/to/928de/"
            target="_blank"
            rel=""
            >Project Demo 🔗</a
          >
        </p>
        <!-- <button class="tellmore" id="tm3">Read more</button> -->
        <div>
          <div>
            <img
              src="../assets/portfolio/images/pass_manager.webp"
              alt="Password Manager App"
            />
          </div>
        </div>
      </div>
      <!-- End of Project -->
    </div>
  </section>

  <section class="third-section">
    <div data-aos="fade-up" class="container">
      <h2 class="title">Why Me</h2>
      <p>These are some reasons why I may be the best fit for you project</p>
      <div>
        <p>
          <i class="fas fa-heart"></i> I will update you daily. I am open to
          have online meets with you at any moment of the day at the platform of
          your choice about the progress of the job;
        </p>
        <p>
          <i class="fas fa-heart"></i>
          I will do how many revisions are necessary. I will only stop working
          on the project when you are 100% satisfied;
        </p>
        <p>
          <i class="fas fa-heart"></i>
          I will dedicate at least 21 hours per week to your project.
        </p>
      </div>
    </div>
  </section>

  <section class="third-section">
    <div data-aos="fade-up" class="container">
      <h2 class="title">Testimonials</h2>
      <p>l always give 100% of me. These are some reviews I earned from the people I worked with</p>
      <div class="testimonial">
        <div class="title">Completed Sucessfully!</div>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <div class="message">
          "Takes his time but is relentless till the work is completed. Will
          definitely be hiring him in the future for more projects. High quality
          work, independent and good communication skills - ideal qualities in a
          freelancer."
        </div>
        <div class="author">Upwork Client</div>
        <div class="testimonial-brand"></div>
      </div>
      <div class="testimonial">
        <div class="title">Completed Sucessfully!</div>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <div class="message">
          "Edilson was great to work with, he brings new ideas to the project
          and goes out of the box to implement the features in the requirements
          specified. Would definitely work with him again."
        </div>
        <div class="author">Upwork Client</div>
        <div class="testimonial-brand"></div>
      </div>
      <div class="testimonial">
        <div class="title">Completed Sucessfully!</div>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <div class="message">
          "Edilson Gudo was super to work with, he was always available and
          added his own ideas and initiatives to the work to deliver a superior
          end product. He was also a joy to work with and I cant wait to work
          with him again."
        </div>
        <div class="author">Upwork Client</div>
        <div class="testimonial-brand"></div>
      </div>
      <div class="testimonial">
        <div class="title">Completed Sucessfully!</div>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <div class="message">
          "Delivered the requested deliverables and kept us well updated on each
          step....would hire again!"
        </div>
        <div class="author">Upwork Client</div>
        <div class="testimonial-brand"></div>
      </div>
    </div>
  </section>

  <section data-aos="fade-up">
    <div class="container" data-aos="fade-up">
      <h2 data-aos="fade-up" class="title">Stacks</h2>
      <p>Combination of some technologies I like to use</p>
      <div class="flex">
        <div class="icon-container">
          <i class="devicon-python-plain stack_icon"></i>
          <div>Python</div>
        </div>
        <div class="icon-container">
          <i class="devicon-django-plain stack_icon"></i>
          <div>Django</div>
        </div>
        <div class="icon-container">
          <i class="devicon-flask-plain stack_icon"></i>
          <div>Flask</div>
        </div>
        <div class="icon-container">
          <i class="devicon-javascript-plain stack_icon"></i>
          <div>Javascript</div>
        </div>
        <div class="icon-container">
          <i class="devicon-vuejs-plain stack_icon"></i>
          <div>Vue</div>
        </div>
        <div class="icon-container">
          <i class="devicon-nodejs-plain stack_icon"></i>
          <div>Node js</div>
        </div>
        <div class="icon-container">
          <i class="devicon-jquery-plain stack_icon"></i>
          <div>Jquery</div>
        </div>
        <div class="icon-container">
          <i class="devicon-css3-plain stack_icon"></i>
          <div>CSS3</div>
        </div>
        <div class="icon-container">
          <i class="devicon-github-plain stack_icon"></i>
          <div>Github</div>
        </div>
        <div class="icon-container">
          <i class="devicon-git-plain stack_icon"></i>
          <div>Git</div>
        </div>
        <div class="icon-container">
          <i class="devicon-linux-plain stack_icon"></i>
          <div>Linux</div>
        </div>
        <div class="icon-container">
          <i class="devicon-docker-plain stack_icon"></i>
          <div>Docker</div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div>
      Developed with <i class="fas fa-heart"></i> by Edilson Gudo <br />
      © 2022
    </div>
  </footer>
</template>

<style>
:root {
  --bgcolor1: #ffffff;
  --bgcolor2: var(--bgcolor1);
  --bodytext: grey;
  --titlecolor: #3b3b3b;
  --buttonbg1: rgba(147, 237, 199, 1);
  --buttonbg2: rgba(147, 237, 199, 1);
  --buttontext: #fff;
  --iconcolor: var(--buttonbg);
  --boxshadowcolor: rgba(213, 221, 236, 0.4) 20px 20px 20px 20px;

  --plyr-color-main: rgba(0, 0, 0, 0.5);

  --music-player-progress-color: var(--buttonbg1);
  --music-player-progress-thumb-color: var(--buttonbg2);
}

.dark-mode:root {
  --bgcolor1: #121212;
  --bgcolor2: var(--bgcolor1);
  --titlecolor: rgba(255, 255, 255, 0.87);
  --bodytext: rgba(255, 255, 255, 0.6);
  --iconcolor: rgba(255, 255, 255, 0.87);
  --buttonbg2: var(--iconcolor);
  --playercolor: #212121;
  --playercolor2: #212121;
  --boxshadowcolor: rgba(213, 221, 236, 0.1) 1px 1px 1px 1px;
}

@font-face {
  font-family: "Hey_August";
  src: url("../assets/portfolio/fonts/Hey_August/Hey August.otf");
}

@font-face {
  font-family: "francisco-serial";
  src: url("../assets/portfolio/fonts/Francisco_Serial/francisco-serial-medium-regular.ttf");
}

@font-face {
  font-family: "Averta";
  src: url("../assets/portfolio/fonts/averta/AvertaDemoPECuttedDemo-Regular.otf");
}

form {
  text-align: left;
  max-width: 450px;
  margin: 0 auto;
}

button,
.cta {
  border: transparent;
  background: transparent;
  border-color: transparent;
  margin-bottom: 10px;
  background: var(--buttonbg2);
  border-radius: 5px;
  color: var(--buttontext);
  padding: 10px;
  font-family: "Averta";
}

button,
.cta {
  font-size: 1.25rem;
  text-decoration: none;
}

a {
  display: inline-block;
  color: var(--buttonbg);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  /*  background: -webkit-linear-gradient(var(--buttonbg1), var(--buttonbg2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;*/
  color: var(--titlecolor);
}

/* {
  padding: 0;
  margin: 0;
}*/

section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

body {
  background: var(--bgcolor1);
  background-size: contain;
  color: var(--bodytext);
  font-family: "Averta", sans-serif;
  word-wrap: break-word;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 1.15rem;
}

.profile-img {
  background: url(../assets/portfolio/images/Edilson.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border: 1px solid var(--buttonbg2);
  border-radius: 50%;
}

.first-section {
  align-items: center;
}

.container {
  margin: 0 auto;
  width: 70%;
  /*background: rgba(255, 255, 255, 0.1);*/
}

@media only screen and (max-width: 800px) {
  .container {
    width: 90%;
  }
}

.title {
  /*font-size: 3rem;*/
  /*font-weight: 900;*/
  font-family: "Hey_August", sans-serif;
  font-size: 4rem;
}

.secondary-title {
  /*font-size: 1.25rem;*/
  font-size: 1.5rem;
  font-family: "Hey_August", sans-serif;
}

.call-to-action-container {
  margin-top: 10px;
}

.call-to-action {
  background: var(--buttonbg);
  color: var(--buttontext);
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  text-decoration: none;
  text-align: center;
}

.btn-floating {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: var(--buttonbg2);
  color: var(--buttontext);
}

.socialmedias {
  font-size: 2rem;
  color: var(--buttonbg2);
  /*background: -webkit-linear-gradient(0deg, var(--buttonbg1), var(--buttonbg2));*/
  /*  background: var(--buttonbg2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;*/
}

.socialmedias a:hover {
  color: var(--buttonbg2);
  transform: rotate(15deg);
}

.second-section {
  text-align: center;
  justify-content: center;
  /*background: #3B3B3B;*/
}

.portfolio-gallery {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
}

.portfolio-gallery-item {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.portfolio-gallery-item-image {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

footer {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 30%;
  text-align: center;
  flex-direction: column;
}

.stack_icon {
  /*color: var(--iconcolor);*/
  font-size: 5rem;
  /*background: -webkit-linear-gradient(0deg, var(--buttonbg1), var(--buttonbg2));*/
  background: var(--buttonbg2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.flex {
  margin: 0 auto;
  display: flex;
  flex-basis: 30%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.flex > * {
}

.embed {
  margin: 10px auto;
  /* text-align: center;
  position: relative; */
  /* padding-bottom: 56.25%; */
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

video {
  width: 100%;
  height: 100%;
}

.project {
  margin-top: 100px;
}

.project img {
  width: 100%;
}

.project a {
  /* text-decoration-color: var(--buttonbg1);
  text-decoration-thickness: 2px; */
}

.plyr--video.plyr--stopped .plyr__controls {
  display: none;
}

/*Navbar*/

.navbar {
  margin-bottom: 100px;
}

.navbar .nav {
  display: none;
}

.navbar-active .nav {
  display: flex;
}

.hamburger {
  position: absolute;
  top: 20px;
  right: 20px;
}

.navbar-active {
  background: var(--bgcolor1);
  position: fixed;
  z-index: 100000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /*transition-duration: 0.5s;
*/
}

.navbar label.bars {
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
}

.navbar label.bars .bar {
  background: var(--buttonbg2);
  border-radius: 10px;
  height: 7px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.navbar .bar:nth-of-type(1) {
  width: 50%;
}

.navbar .bar:nth-of-type(2) {
  width: 100%;
}

.navbar .bar:nth-of-type(3) {
  width: 75%;
}

.navbar input[type="checkbox"] {
  display: none;
}

.navbar input[type="checkbox"]:checked ~ .bar:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotatez(45deg) translate(8px, 0px);
}

.navbar input[type="checkbox"]:checked ~ .bar:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg);
}

.navbar input[type="checkbox"]:checked ~ .bar:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(30px, -11px) rotatez(45deg);
}

.nav {
  margin-top: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.nav * {
  margin-left: 10px;
}

.top-icon {
  /*background: -webkit-linear-gradient(0deg, var(--buttonbg1), var(--buttonbg2));*/
  background: var(--buttonbg2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition-duration: 0.25s;
}

#toggledark {
  position: absolute;
  top: 30px;
  right: 100px;
  color: var(--iconcolor);
  cursor: pointer;
  font-size: 2rem;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
}

#colorpickersection {
  position: absolute;
  top: 30px;
  right: 140px;
  display: flex;
  justify-content: center;
  height: 50px;
}

.theme-picker {
  display: flex;
  justify-content: flex-start;
  opacity: 0;
  width: 0;
  transition-duration: 0.5s;
}

#toggle-theme-picker {
  color: var(--iconcolor);
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-size: 2rem;
}

.color {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(var(--buttonbg1), var(--buttonbg2));
  margin-right: 5px;
}

.testimonial {
  background: #212121;
  text-align: left;
  margin: 50px auto;
  padding: 16px;
}

.testimonial .stars {
  margin: 10px 0;
  color: var(--iconcolor);
  font-size: 1.25rem;
}

.testimonial .message {
  max-width: 570px;
}

.testimonial .author {
  margin: 20px 0;
  font-size: 1.2rem;
  font-family: "francisco-serial", sans-serif;
}

.testimonial .title {
  margin-bottom: 30px;
  font-family: "francisco-serial";
  font-size: 2rem;
  color: var(--titlecolor);
}

.testimonial-brand {
  margin-top: 50px;
  background-image: url(../assets/portfolio/images/upwork.svg);
  height: 30px;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
