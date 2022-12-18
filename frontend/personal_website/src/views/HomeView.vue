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

  <section>
    <div class="container">
      <h2 class="secondary-title"></h2>
      <p>Life is better with music so built a music player for you.</p>
      <p>My favourite music genre is dance/electronica.</p>
    </div>
  </section>

  <Projects />
  <WhyMe />
  <Testimonials />
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
