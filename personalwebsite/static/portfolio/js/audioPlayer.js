//Create Audio
document.body.appendChild(document.createElement('audio'))

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currentTimeDiv = document.querySelector('.current')
const durationDiv = document.querySelector('.duration')
const musicIcon = document.querySelector('#music-icon')
const seekSlider = document.getElementById('seek-slider');


async function getSongs() {
    let response = await fetch(`${$SCRIPT_ROOT}/songs`)
    let data = await response.json();
    return data.songs
}

getSongs().then(response => {

    // Song titles
    const songs = response

    // Keep track of song
    let songIndex = Number(localStorage.getItem('songIndex'));
    console.log(songIndex)
    if (songIndex === null) {
        songIndex = 0
    }


    // Initially load song details into DOM
    loadSong(songs[songIndex]);

    // Update song details
    function loadSong(song) {

      // audio.src = `media/audio/${song}`;
      audio.src = `audio/${song}`;
      if (localStorage.currentTime) {
        audio.currentTime = JSON.parse(localStorage.currentTime)
      }

      // Update Seek Slider
      const setSliderMax = () => {
        seekSlider.max = Math.floor(audio.duration);
      }
      if (audio.readyState > 0) {
        setSliderMax();
      } else {
        audio.addEventListener('loadedmetadata', () => {
          setSliderMax();
        });
      }

      song = remove_extension(song)
      title.innerText = song;
      let albumArtURL = `media/albumArts/${song}.jpg`
      var img = new Image()
      img.src = albumArtURL
      img.onload = function () {
        cover.style.display = "block"
        cover.src = albumArtURL;
        musicIcon.style.display = "none"
      }
      img.onerror = function() {
        cover.style.display = "none"
        musicIcon.style.display = "block"
      }

    }

    // Play song
    function playSong() {
      musicContainer.classList.add('play');
      playBtn.querySelector('i.fas').classList.remove('fa-play');
      playBtn.querySelector('i.fas').classList.add('fa-pause');

      audio.play();
    }

    // Pause song
    function pauseSong() {
      musicContainer.classList.remove('play');
      playBtn.querySelector('i.fas').classList.add('fa-play');
      playBtn.querySelector('i.fas').classList.remove('fa-pause');

      audio.pause();
    }

    // Previous song
    function prevSong() {
      localStorage.currentTime = 0
      songIndex--;

      if (songIndex < 0) {
        songIndex = songs.length - 1;
      }

      loadSong(songs[songIndex]);

      playSong();
      localStorage.setItem('songIndex', songIndex)
    }

    // Next song
    function nextSong() {
      localStorage.currentTime = 0
      songIndex++;

      if (songIndex > songs.length - 1) {
        songIndex = 0;
      }

      loadSong(songs[songIndex]);

      playSong();
      localStorage.setItem('songIndex', songIndex)
    }

    // Update progress bar
    function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;
      console.log(currentTime)
      localStorage.currentTime = JSON.stringify(currentTime)

      var minutes = Math.floor(currentTime / 60)
      var seconds = Math.floor(currentTime % 60)
      currentTimeDiv.innerHTML = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`

      var minutes2 = Math.floor(duration / 60)
      var seconds2 = Math.floor(duration % 60)
      durationDiv.innerHTML = `${('0' + minutes2).slice(-2)}:${('0' + seconds2).slice(-2)}`

      const progressPercent = (currentTime / duration) * 100;
    }

    // Set progress bar
    seekSlider.addEventListener('change', () => {
      audio.currentTime = seekSlider.value;
    });

    audio.addEventListener('timeupdate', () => {
      seekSlider.value = Math.floor(audio.currentTime);
      var $fill = $(".bar .fill");
      $fill.css("width", Math.floor(((audio.currentTime / audio.duration)) * 100) + "%");
    });

    // Handle Slider Input in Real Time
    seekSlider.addEventListener('input', () => {
      var $fill = $(".bar .fill");
      $fill.css("width", Math.floor(((seekSlider.value / audio.duration)) * 100) + "%");
      var minutes = Math.floor(seekSlider.value / 60)
      var seconds = Math.floor(seekSlider.value % 60)
      currentTimeDiv.innerHTML = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
    })

    // Event listeners
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      const isPlaying = musicContainer.classList.contains('play');

      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    });

    // Change song
    prevBtn.addEventListener('click', (e) => {e.stopPropagation(); prevSong()});
    nextBtn.addEventListener('click', (e) => {e.stopPropagation(); nextSong()});

    // Time/song update
    audio.addEventListener('timeupdate', updateProgress);

    // Click on progress bar

    // Song ends
    audio.addEventListener('ended', nextSong);

})