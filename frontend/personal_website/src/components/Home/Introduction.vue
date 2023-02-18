<template>
  <section class="first-section">
    <div class="container">
      <div class="box"><div class="profile-img"></div></div>
      <div class="box">
        <h1 class="title">Freelancer Developer</h1>
        <h2 class="secondary-title">Edilson Gudo</h2>
        <p>
          Hi, I am an EXPERT developer with solid experience creating scripts, apis and
          beautiful, otimized and functionality rich web applications.
          <div>
            <p>Send me a message so we can schedule a quick call and talk about what you have in mind</p>
            <a class="cta" target="_blank" href="https://www.upwork.com/freelancers/~0141883011094530b8">Upwork Profile</a>
          </div>
        </p>
        <div class="socialmedias">
          <a target="_blank" href="https://linkedin.com/in/edilsongudo"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a target="_blank" href="https://github.com/edilsongudo"
            ><i class="fab fa-github"></i
          ></a>
          <!-- <a href="https://www.youtube.com/watch?v=XE4ime8hCxE&t=0s"
            ><i class="fab fa-youtube"></i
          ></a> -->
          <a target="_blank" href="mailto:edilsongudo@gmail.com"
            ><i class="fas fa-envelope"></i
          ></a>
        </div>
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

.first-section .container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.first-section .container .box {
  width: 100%;
}

.socialmedias {
  font-size: 2rem;
  color: var(--buttonbg2);
}

.socialmedias * {
  margin: 0 1px;
}

.socialmedias a:hover {
  color: var(--buttonbg2);
  transform: rotate(15deg);
}
</style>
