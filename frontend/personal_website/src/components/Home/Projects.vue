<template>
  <section class="second-section">
    <div class="container" data-aos="fade-up">
      <h2 class="title">Portfolio</h2>
      <p>Here you can watch quick demo videos of some of my projects</p>
      <!-- Project -->
      <div class="project" data-aos="fade-up">
        <h5>Online Transcription Tool</h5>
        <p>
          This is a web app that allows users to drag and drop an audio or video file
          and export the transcripted audio.
        </p>
        <!-- <button class="tellmore" id="tm1">Read more</button> -->
        <div>
          <div class="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hKqjzEPljdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <!-- End of Project -->

      <!-- Project -->
      <div class="project" data-aos="fade-up">
        <h5>Linktree clone</h5>
        <p>
          <a href="https://selflink.co/" target="_blank" rel="">This</a>
          is powerful link in bio platform and URL shortener.
          <!-- <br /><a href="https://selflink.co/to/c8d69/" target="_blank" rel=""
            >🔗Project Demo</a
          > -->
        </p>
        <!-- <button class="tellmore" id="tm2">Read more</button> -->
        <div>
          <div class="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EZ2W-aZiDW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <!-- End of Project -->

      <!-- Project -->
      <div class="project" data-aos="fade-up">
        <h5>Password Manager</h5>
        <p>
          This is an app where users only need to create and remember one master
          password to safely store other ones.
          <!-- <br /><a href="https://selflink.co/to/928de/" target="_blank" rel=""
            >🔗 Project Demo</a
          > -->
        </p>
        <!-- <button class="tellmore" id="tm3">Read more</button> -->
        <div>
          <div class="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/s1PJQxotdJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
  text-align: center;
  position: relative;
  padding-bottom: 56.25%;
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
