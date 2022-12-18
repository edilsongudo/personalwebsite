<template>
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
</template>

<style>
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
</style>
