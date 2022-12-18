<script>
import axios from "axios";

import ColorThief from "colorthief/dist/color-thief.mjs";

export default {
  setup() {},
  data() {
    return {
      songs: [],
      song: null,
      audio: null,
      songIndex: 0,
      isPlaying: false,
      server_base_url: import.meta.env.VITE_HOST,
    };
  },
  methods: {
    async fetchSongs() {
      console.log("fetching songs...");
      const res = await axios.get(`${this.server_base_url}/songs/`);
      this.songs = res.data.songs;
      return res.data.songs;
    },
    initialSetup() {
      // Create Cover Image element
      const imageContainer = document.querySelector(".img-container");
      const cover = document.createElement("img");
      cover.setAttribute("crossOrigin", "");
      cover.id = "cover";
      imageContainer.appendChild(cover);
      // Create audio element
      const audio = document.createElement("audio");
      document.body.appendChild(audio);
      this.audio = audio;

      if (localStorage.songPlaying) {
        console.log("Searching localstorage...");
        const index = this.songs.findIndex(
          (item) =>
            item.filename === JSON.parse(localStorage.songPlaying).filename
        );
        if (index) {
          this.songIndex = index;
          console.log("Loadied last song from localstorage...");
        }
      }

      console.log("initial setup ran.");
    },
    loadSong() {
      this.reset();
      this.song = this.songs[this.songIndex];

      localStorage.songPlaying = JSON.stringify(this.song);

      const filename = this.song["filename"];
      this.audio.src = this.song["file"];

      if (localStorage.currentTime) {
        this.audio.currentTime = JSON.parse(localStorage.currentTime);
      }

      const title = document.getElementById("title");
      const artist = document.getElementById("artist");
      const cover = document.querySelector("#cover");
      const musicIcon = document.querySelector("#music-icon");
      const albumArtURL = this.song["artwork"];

      title.innerText = this.song["title"];
      artist.innerText = this.song["artist"];

      cover.src = albumArtURL;
      musicIcon.style.display = "none";
      cover.onload = function () {
        cover.style.display = "block";

        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(cover);
        console.log(palette);

        function arrayToRgb(value) {
          const r = value[0];
          const g = value[1];
          const b = value[2];
          const color = `rgb(${r},${g},${b})`;
          return color;
        }

        const rgbArrays = colorThief.getColor(cover);
        const color1 = arrayToRgb(rgbArrays);
        const r = document.querySelector(":root");
        r.style.setProperty("--playercolor", color1);
      };
      cover.onerror = function () {
        cover.style.display = "none";
        musicIcon.style.display = "block";
      };

      if (this.isPlaying) {
        this.playSong();
      }
    },
    playSong() {
      const playBtn = document.querySelector("#play");
      playBtn.querySelector("i.fas").classList.remove("fa-play");
      playBtn.querySelector("i.fas").classList.add("fa-pause");
      this.audio.play();
      this.isPlaying = true;
    },
    pauseSong() {
      const playBtn = document.querySelector("#play");
      playBtn.querySelector("i.fas").classList.add("fa-play");
      playBtn.querySelector("i.fas").classList.remove("fa-pause");
      this.audio.pause();
      this.isPlaying = false;
    },
    playOrPauseSong() {
      if (!this.isPlaying) {
        this.playSong();
      } else {
        this.pauseSong();
      }
    },
    previousSong() {
      this.songIndex--;
      if (this.songIndex < 0) {
        this.songIndex = this.songs.length - 1;
      }
      localStorage.currentTime = 0;
      this.loadSong();
    },
    nextSong() {
      this.songIndex++;
      if (this.songIndex > this.songs.length - 1) {
        this.songIndex = 0;
      }
      localStorage.currentTime = 0;
      this.loadSong();
    },
    updateProgress() {
      const { duration, currentTime } = this.audio;
      localStorage.currentTime = JSON.stringify(currentTime);

      const currentTimeDiv = document.querySelector(".current");
      const durationDiv = document.querySelector(".duration");

      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      currentTimeDiv.innerHTML = `${("0" + minutes).slice(-2)}:${(
        "0" + seconds
      ).slice(-2)}`;

      const minutes2 = Math.floor(duration / 60);
      const seconds2 = Math.floor(duration % 60);
      durationDiv.innerHTML = `${("0" + minutes2).slice(-2)}:${(
        "0" + seconds2
      ).slice(-2)}`;

      const progressPercent = (currentTime / duration) * 100;
    },
    setSeekSliderMax() {
      this.seekSlider.max = Math.floor(this.audio.duration);
      this.seekSlider.value = this.audio.currentTime;
    },
    updateSeekSlider() {
      this.seekSlider.value = Math.floor(this.audio.currentTime);
      this.fill.style.width = `${Math.floor(
        (this.audio.currentTime / this.audio.duration) * 100
      )}%`;
    },
    reset() {
      this.seekSlider.value = 0;
      this.fill.style.width = `0%`;
    },
    showPlayerFullScreen() {
      const playerModal = document.querySelector(".music-player-modal");
      if (playerModal.classList.contains("collapsed")) {
        playerModal.classList.remove("collapsed");
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
      }
    },
    collapsePlayer() {
      const playerModal = document.querySelector(".music-player-modal");
      playerModal.classList.add("collapsed");
      document.body.style.position = "";
      document.body.style.top = "";
    },
    handleMediaSession() {
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: this.song["title"],
          artist: this.song["artist"],
          album: this.song["album"],
          artwork: [{ src: this.song["artwork"] }],
        });

        const actionsAndHandlers = [
          [
            "play",
            () => {
              this.playOrPauseSong();
            },
          ],
          [
            "pause",
            () => {
              this.playOrPauseSong();
            },
          ],
          [
            "previoustrack",
            () => {
              this.previousSong();
            },
          ],
          [
            "nexttrack",
            () => {
              this.nextSong();
            },
          ],
          // ['seekbackward', (details) => { /*...*/ }],
          // ['seekforward', (details) => { /*...*/ }],
          // ['seekto', (details) => { /*...*/ }],
          // ['stop', () => { /*...*/ }]
        ];

        for (const [action, handler] of actionsAndHandlers) {
          try {
            navigator.mediaSession.setActionHandler(action, handler);
          } catch (error) {
            console.log(
              `The media session action, ${action}, is not supported`
            );
          }
        }
      }
    },
  },
  mounted() {
    this.fetchSongs().then((res) => {
      const seekSlider = document.getElementById("seek-slider");
      const fill = document.querySelector(".progress-container .bar .fill");
      this.seekSlider = seekSlider;
      this.fill = fill;

      this.initialSetup();
      this.loadSong();

      this.audio.onplay = () => {
        this.handleMediaSession();
      };

      seekSlider.addEventListener("input", () => {
        this.audio.currentTime = this.seekSlider.value;
        this.fill.style.width = `${Math.floor(
          (this.seekSlider.value / this.audio.duration) * 100
        )}%`;
      });

      this.audio.addEventListener("loadedmetadata", this.setSeekSliderMax);
      this.audio.addEventListener("loadedmetadata", this.updateProgress);
      this.audio.addEventListener("timeupdate", this.updateProgress);
      this.audio.addEventListener("timeupdate", this.updateSeekSlider);
      this.audio.addEventListener("ended", this.nextSong);
    });
  },
  computed: {
    classObject() {
      return {
        "fas fa-play": this.isPlaying === false,
        "fas fa-pause": this.isPlaying === true,
      };
    },
  },
};
</script>

<template>
  <div class="music-player-modal collapsed" @click.stop="showPlayerFullScreen">
    <div class="wrapper">
      <div class="music-container" id="music-container">
        <div class="volume-popup-modal">
          <div class="middle">
            <div class="slider-container">
              <span class="bar"><span class="fill"></span></span>
              <input
                id="volume"
                class="slider"
                type="range"
                min="0"
                max="100"
                value="50"
              />
            </div>
          </div>
        </div>
        <button id="close-player" @click.stop="collapsePlayer">
          <i class="fas fa-chevron-down"></i>
        </button>

        <div class="img-container">
          <div id="music-icon"><i class="fas fa-music"></i></div>
        </div>

        <div class="music-info">
          <div class="songs-title-and-artist">
            <span id="title">loading songs... please wait</span>
            <br />
            <span id="artist"></span>
          </div>
          <div class="progress-container" id="progress-container">
            <div class="middle">
              <div class="slider-container">
                <span class="bar"><span class="fill"></span></span>
                <input
                  id="seek-slider"
                  class="slider"
                  type="range"
                  min="0"
                  max="100"
                  value="50"
                />
              </div>
            </div>
            <div id="progress-time">
              <span class="current">0:00</span>
              <span class="duration">0:00</span>
            </div>
          </div>
        </div>

        <div class="navigation">
          <button id="" class="action-btn not-implemented">
            <i id="randomize" class="fas fa-random"></i>
          </button>
          <div>
            <button @click.stop="previousSong" id="prev" class="action-btn">
              <i class="fas fa-backward"></i>
            </button>
            <button
              @click.stop="playOrPauseSong"
              id="play"
              class="action-btn action-btn-big"
            >
              <span class="play-icon-container"
                ><i :class="classObject"></i
              ></span>
            </button>
            <button @click.stop="nextSong" id="next" class="action-btn">
              <i class="fas fa-forward"></i>
            </button>
          </div>
          <button id="" class="action-btn not-implemented">
            <i id="volume-icon" class="fas fa-volume-up"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.volume-popup-modal {
  transform: rotate(-90deg);
  display: flex;
  transform: translateY(-1000px);
  transition-duration: 0.5s;
  justify-content: center;
  align-items: center;
  /*background: rgba(255, 255, 255, 0.3);*/
  border-radius: 6px;
  margin: 0 auto;
  /*display: none;*/
  border-radius: 6px;
  z-index: 10000;
  color: var(--bodytext);
}

.music-player-modal {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  /*transform: translateY(120%);*/
  height: 100%;
  box-shadow: rgba(213, 221, 236, 0.4) 20px 20px 20px 20px;
  z-index: 1000;
  transition-duration: 0.5s;
  background-image: linear-gradient(0deg, var(--bgcolor1), var(--playercolor));
  color: var(--iconcolor);
}

.music-container {
  margin-top: 2vh;
  position: relative;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  padding: 15px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

#close-player {
  font-size: 1.5rem;
  position: absolute;
  top: -20px;
  left: 0px;
}

.music-info {
  margin-top: 10px;
}

.music-info .songs-title-and-artist {
  height: 50px;
  margin-bottom: 30px;
}

.music-info #title {
  font-size: 1rem;
  height: 30px;
}

.music-info #artist {
  margin-top: 10px;
  font-size: 0.7rem;
  height: 20px;
}

.img-container {
  margin-top: 2.5vh;
  background-position: center;
  background-size: cover;
  top: 0px;
  left: 0px;
  width: 100%;
}

.img-container img#cover {
  margin: 0 auto;
  width: 100%;
  border-radius: 6px;
}

#music-icon i {
  width: 100%;
  background-color: rgba(255,255,255, 0.1);
  color: var(--bodytext);
  font-size: 18rem;
}

#progress-time {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.navigation {
  display: flex;
  justify-content: space-between;
}

.navigation i {
  font-size: 1.5rem;
}

.navigation #randomize {
  transition-duration: 0.5s;
}

.music-player-modal button {
  border: transparent;
  color: var(--iconcolor);
  font-size: 2rem;
  background: transparent;
}

.button-active {
  color: var(--buttonbg2);
}

.play-icon-container {
  background: rgba(255,255,255, 0.87);
  color: var(--bgcolor1);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.play-icon-container i {
  color: var(--bodytext);
}

.dark-mode .play-icon-container i {
  color: #121212;
}

.not-implemented {
  opacity: 0.25;
}

@media (max-width: 440px) {
  .music-container {
    margin-top: 2vh;
      max-width: 90%;
  }
}

.collapsed, .collapsed *:not(.fas) {
  all: unset;
}

.collapsed .fa-random, .collapsed .fa-volume-up {
  display: none;
}

.collapsed .action-btn {
  margin: 0 1vw;
}

.collapsed #close-player {
  display: none;
}

.collapsed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  box-shadow: var(--boxshadowcolor);
  z-index: 1000;
  transition-duration: 0s;
  background-image: linear-gradient(0deg, var(--playercolor2), var(--playercolor2));
  color: var(--iconcolor);
  border-radius: 10px;
}

.collapsed .play-icon-container i {
  color: var(--iconcolor);
}

.collapsed .music-container {
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
}

.collapsed .img-container {
  background-position: center;
  background-size: cover;
  width: 30%;
}

.collapsed img#cover {
  margin: 0 auto;
  height: 40px;
  width: 40px;
  border-radius: 10px;
}

.collapsed #music-icon i {
  transition-duration: 0s;
  width: 25px;
  height: 25px;
  background-color: rgba(255,255,255, 0.1);
  color: var(--iconcolor);
  font-size: 1.5rem;
}

.collapsed .music-info {
  width: 30%;
  line-height: 50%;
}

.collapsed .progress-container {
  display: none;
}

.collapsed #title {
    font-size: 0.6rem;
}

.collapsed #artist {
  font-size: 0.4rem;
}

.collapsed .navigation {
  width: 40%;
  font-size: 1.5rem;
}

.collapsed .current, .collapsed .duration {
  display: none;
}

.collapsed .volume-popup-modal {
  display: none;
}


.middle {
  width: 100%;
}
.slider-container {
  position: relative;
}
.slider-container .bar {
  position: absolute;
  z-index: 1;
  left: 2px;
  top: 13px;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: rgba(127, 127, 127, 0.7);
  overflow: hidden;
}
.slider-container .bar .fill {
  display: block;
  width: 0;
  height: 100%;
  background: #fff;
}
.slider-container .slider {
  position: relative;
  z-index: 2;
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
}
.slider-container .slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 0 0 rgba(98,0,238,.1);
  transition: .3s ease-in-out;
}
.slider-container .slider::-moz-range-thumb {
  outline: none;
  box-shadow: 0 0 0 0 rgba(98,0,238,.1);
  transition: .3s ease-in-out;
  border: 1px solid #fff;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #fff);
  cursor: pointer;
}
/*.slider-container .slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 20px rgba(98,0,238,.1);
}
.slider-container .slider:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 40px rgba(98,0,238,.2);
}
*/


/*input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background: transparent;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497E3;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #2497E3;
}
input[type=range]:focus::-ms-fill-upper {
  background: #2497E3;
}*/
</style>
