<template>
  <section class="first-section">
    <div class="container">
      <div class="box"><div class="profile-img"></div></div>
      <div class="box">
        <h1 class="title">Power up your business with <span class="highlight">tailored code</span> or <span class="highlight">AI</span> 🚀</h1>
        <!-- <h2 class="secondary-title">Edilson Gudo</h2> -->
        <p>
          Hey there! 🖐️ Are you interested in leveraging <b>artificial intelligence</b> or <b>tailored code</b> to solve a problem in your business? I'm here to assist you!
        </p>
        <!-- <br> -->
        <p>I am an senior developer, tech consultant and also founder of <a target="_blank" href="https://shakedigital.co">shakedigital.co.</a></p>
        <br>
        <p>Feel free to send me a message, and we can schedule a brief call (100% free) to discuss your business needs. Trust me, you won't want to miss out on this opportunity! 😃</p>
        <!-- <a class="cta" target="_blank" href="https://wa.link/xbec1h"> <i class="fab fa-whatsapp"></i> Send Message</a> -->
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

.highlight {
  color: rgb(176, 136, 255);
}

.first-section {
  align-items: center;
  margin-top: 50px;
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
