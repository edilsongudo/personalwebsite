<script>
import Introduction from "@/components/Home/Introduction.vue";
import Testimonials from "@/components/Home/Testimonials.vue";
import Projects from "@/components/Home/Projects.vue";
import WhyMe from "@/components/Home/WhyMe.vue";
import Stacks from "@/components/Home/Stacks.vue";
import PreLoading from "@/components/Preloading/PreLoading.vue";
export default {
  components: {
    Introduction,
    PreLoading,
    Projects,
    WhyMe,
    Stacks,
    Testimonials,
  },
};
</script>

<template>
  <PreLoading />
  <Introduction />

  <section class="life-is-better">
    <div class="container">
      <h2 class="secondary-title"></h2>
      <p>Life becomes way better with music. <br> I developed a music player so you can listen to a few songs I am adicted to.</p>
      <p>Click on the <i class="fas fa-play"></i> icon at the bottom of the screen to start playing</p>
      <br>
      <br>
      <p>My favourite music genre is dance/electronica.</p>
      <p>Some of my favourites artists are Dua Lipa, Sonny Fodera, Neovaii, Kygo, Calvin Harris and Selena Gomez</p>
    </div>
  </section>

  <Projects />
  <WhyMe />
  <Testimonials />

  <section class="live-to-fullest">
    <div class="container">
      <h2 class="secondary-title"></h2>
      <p>I never was inspired by the traditional path. Don't live the society dream and pretend it to be yours.
        <br>It's okay to take risks, it's okay to messup, and, it's okay to do the opposite of what everybody is doing.
       <br>  Some guys I am inspired by are Jay Alvarrez, Adam Horwitz, Chris Rogers and Sam Kolder.</p>
      <div class="embed">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GndMmMR3NAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </section>

  <Stacks />

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
  --playercolor: #ffffff;
  --playercolor2: #ffffff;

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

button,
.cta {
  border: transparent;
  background: transparent;
  margin: 25px 0;
  background: #fff;
  border-radius: 50px;
  color: #121212;
  padding: 20px 80px;
  font-family: "Averta";
  font-size: 1.25rem;
  text-decoration: none;
  transition: .15s;
}

.cta:hover {
  color: #121212;
  background: lightgray;
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
  color: var(--titlecolor);
}

 {
  padding: 0;
  margin: 0;
}

section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

.container {
  margin: 0 auto;
  width: 70%;
}

section.life-is-better {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8),
                       rgba(0, 0, 0, 0.8)), 
                       url(@/assets/portfolio/myself/dualipa.webp);
}

section.live-to-fullest {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8),
                       rgba(0, 0, 0, 0.8)), 
                       url(@/assets/portfolio/myself/jay.jpg);
}

@media only screen and (max-width: 800px) {
  .container {
    width: 90%;
  }
}

.title {
  font-family: "Hey_August", sans-serif;
  font-size: 4rem;
}

.secondary-title {
  font-size: 1.5rem;
  font-family: "Hey_August", sans-serif;
}

.second-section {
  text-align: center;
  justify-content: center;
}

footer {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
