<template>
  <section class="first-section">
    <div class="container">
      <div class="">
        <div class="profile-img"></div>
      </div>
      <h1 class="title">I'm Edilson</h1>
      <h2 class="secondary-title">Fullstack Developer</h2>
      <p>
        Hi I am a developer with solid experience creating scripts, apis and
        beautiful, otimized and functionality rich web applications.
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
        <a href="mailto:edilsongudo@gmail.com"
          ><i class="fas fa-envelope"></i
        ></a>
      </div>
    </div>
  </section>
</template>

<style>
.profile-img {
  background: url(../../assets/portfolio/images/Edilson.webp);
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

.socialmedias {
  font-size: 2rem;
  color: var(--buttonbg2);
  /*background: -webkit-linear-gradient(0deg, var(--buttonbg1), var(--buttonbg2));*/
  /*  background: var(--buttonbg2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;*/
}

.socialmedias * {
  margin: 0 1px;
}

.socialmedias a:hover {
  color: var(--buttonbg2);
  transform: rotate(15deg);
}
</style>
