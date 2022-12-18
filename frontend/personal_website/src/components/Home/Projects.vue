<template>
  <section class="second-section">
    <div class="container" data-aos="fade-up">
      <h2 class="title">Portfolio</h2>
      <p>Here you can see some of my past works</p>
      <!-- Project -->
      <div class="project" data-aos="fade-up">
        <h5>Online Transcription Tool</h5>
        <p>
          A web app that allows users to drag and drop an audio or video file
          and export the transcription.
        </p>
        <!-- <button class="tellmore" id="tm1">Read more</button> -->
        <div>
          <div>
            <video width="320" height="240" controls>
              <source
                src="../../assets/portfolio/videos/199839219-45d0fc04-f5a5-4123-93cc-5fd119af3075.mp4"
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
          <a href="https://selflink.co/" target="_blank" rel="">Selflink</a>
          is powerful link in bio platform powered by Django.
          <br /><a href="https://selflink.co/to/c8d69/" target="_blank" rel=""
            >🔗Project Demo</a
          >
        </p>
        <!-- <button class="tellmore" id="tm2">Read more</button> -->
        <div>
          <div class="embed">
            <img
              src="../../assets/portfolio/images/selflink-selenagomez.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../../assets/portfolio/images/selflink-customize.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../../assets/portfolio/images/selflink-settings.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../../assets/portfolio/images/selflink-dash.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../../assets/portfolio/images/selflink-dash2.webp"
              alt="selflink.co banner"
            />
          </div>
          <div class="embed">
            <img
              src="../../assets/portfolio/images/selflink-socials.webp"
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
          <br /><a href="https://selflink.co/to/928de/" target="_blank" rel=""
            >🔗 Project Demo</a
          >
        </p>
        <!-- <button class="tellmore" id="tm3">Read more</button> -->
        <div>
          <div>
            <img
              src="../../assets/portfolio/images/pass_manager.webp"
              alt="Password Manager App"
            />
          </div>
        </div>
      </div>
      <!-- End of Project -->
    </div>
  </section>
</template>

<style>
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
</style>
