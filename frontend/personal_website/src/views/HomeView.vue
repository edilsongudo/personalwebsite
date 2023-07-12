<script>
import Introduction from "@/components/Home/Introduction.vue";
import Testimonials from "@/components/Home/Testimonials.vue";
import Projects from "@/components/Home/Projects.vue";
import WhyMe from "@/components/Home/WhyMe.vue";
import Stacks from "@/components/Home/Stacks.vue";
import PreLoading from "@/components/Preloading/PreLoading.vue";
import TheFooter from "@/components/Home/TheFooter.vue";
import ThePopupForm from "@/components/Home/ThePopupForm.vue"
export default {
  components: {
    Introduction,
    PreLoading,
    Projects,
    WhyMe,
    Stacks,
    Testimonials,
    TheFooter,
    ThePopupForm
  },
  mounted() {
  },
};
</script>

<template>
  <!-- <PreLoading /> -->
  <Introduction />
  <Projects />
  <!-- <WhyMe /> -->
  <Testimonials />
  <!-- <Stacks /> -->
  <TheFooter />
  <!-- <ThePopupForm /> -->
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
  --bodytext: #d3d3d3;
  --iconcolor: #d3d3d3;
  --buttonbg2: var(--iconcolor);
  --playercolor: #212121;
  --playercolor2: #212121;
  --boxshadowcolor: rgba(213, 221, 236, 0.1) 1px 1px 1px 1px;
}

@font-face {
  font-family: Inter;
  src: url(@/assets/portfolio/fonts/Inter-VariableFont_slnt_wght.ttf);
}

@font-face {
  font-family: "francisco-serial";
  src: url("@/assets/portfolio/fonts/Francisco_Serial/francisco-serial-medium-regular.ttf");
}

@font-face {
  font-family: "Averta";
  src: url("@/assets/portfolio/fonts/averta/AvertaDemoPECuttedDemoRegular.otf");
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
  text-decoration: underline;
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
  font-family: "Inter", sans-serif;
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
  padding: 4%;
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

h1 {
  font-family: "Inter", sans-serif;
  font-size: 64px;
  font-weight: 700;
  margin: 10px auto;
}

.secondary-title {
  font-size: 1.5rem;
  font-family: "Hey_August", sans-serif;
}

.second-section {
  text-align: center;
  justify-content: center;
}

@media only screen and (max-width: 640px) {
    .container {
      width: 100%;
    }

    body {
    font-size: 16px;
    }
    
    h1 {
    font-size: 36px;
    }
    
    h2 {
    font-size: 24px;
    }
}

@media only screen and (min-width: 641px) and (max-width: 1024px) {
    body {
    font-size: 18px;
    }
    
    h1 {
    font-size: 48px;
    }
    
    h2 {
    font-size: 32px;
    }
}
</style>
