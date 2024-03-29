//Create Audio
document.body.appendChild(document.createElement('audio'))

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const currentTimeDiv = document.querySelector('.current')
const durationDiv = document.querySelector('.duration')
const musicIcon = document.querySelector('#music-icon')
const seekSlider = document.getElementById('seek-slider');
const $fill = $('.progress-container .bar .fill');

let songPlaying = undefined

const volumeInput = document.querySelector('#volume')
const $volumeFill = $('.volume-popup-modal .bar .fill');
volumeInput.value = audio.volume * 100
$volumeFill.css('width', audio.volume * 100 + '%')

async function getSongs() {
    let response = await fetch(`${$SCRIPT_ROOT}/songs`)
    let data = await response.json();
    return data.songs
}

getSongs().then(response => {

    const imageContainer = document.querySelector('.img-container')
    cover = document.createElement('img')
    cover.id = 'cover'
    imageContainer.appendChild(cover)


    // Song titles
    const songs = response

    //Shuffle Songs
    if (localStorage.randomize === 'true') {
      shuffle(songs)
    }

    // Keep track of song
    let songIndex = 0
    if (localStorage.songPlaying) {
      songIndex = songs.findIndex(item => item.filename === JSON.parse(localStorage.songPlaying).filename);
    }

    // Initially load song details into DOM
    loadSong(songs[songIndex]);

    // Update song details
    function loadSong(song) {

      const filename = song['filename']
      songPlaying = song
      localStorage.songPlaying = JSON.stringify(songPlaying)

      // audio.src = `media/audio/${song}`;
      audio.src = song['file'];

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

      filename_trimed_extension = remove_extension(filename)
      title.innerText = song['title']
      artist.innerText = song['artist']
      let albumArtURL = song['artwork']
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

      if ('mediaSession' in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
          title: song['title'],
          artist: song['artist'],
          album: song['album'],
          artwork: [{src: albumArtURL}]
        })
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
      $fill.css("width", "0%");
      songIndex--;

      if (songIndex < 0) {
        songIndex = songs.length - 1;
      }

      loadSong(songs[songIndex]);

      playSong();
    }

    // Next song
    function nextSong() {
      localStorage.currentTime = 0
      $fill.css("width", "0%");
      songIndex++;

      if (songIndex > songs.length - 1) {
        songIndex = 0;
      }

      loadSong(songs[songIndex]);

      playSong();
    }

    // Update progress bar
    function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;
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
      $fill.css("width", Math.floor(((audio.currentTime / audio.duration)) * 100) + "%");
    });

    // Handle Slider Input in Real Time
    seekSlider.addEventListener('input', () => {
      $fill.css("width", Math.floor(((seekSlider.value / audio.duration)) * 100) + "%");
      var minutes = Math.floor(seekSlider.value / 60)
      var seconds = Math.floor(seekSlider.value % 60)
      currentTimeDiv.innerHTML = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
    })

    // Handle Volume change
    volumeInput.addEventListener('input', ()=> {
        audio.volume = volumeInput.value / 100
        $volumeFill.css('width', audio.volume * 100 + '%')

        volumeIcon = document.querySelector('#volume-icon')
        if (audio.volume === 0) {
          volumeIcon.classList.remove('fa-volume')
          volumeIcon.classList.add('fa-volume-slash')
        } else {
          volumeIcon.classList.add('fa-volume')
          volumeIcon.classList.remove('fa-volume-slash')
        }
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