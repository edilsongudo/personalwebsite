let playerModal = document.querySelector('.music-player-modal')
let closeBtn = document.querySelector('#close-player')

// Show player
playerModal.addEventListener('click', function(e) {
    if (playerModal.classList.contains('collapsed')) {
         playerModal.classList.remove('collapsed')
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
    }
})

// Hide player
closeBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    playerModal.classList.add('collapsed')
    document.body.style.position = ''
    document.body.style.top = ''
})

//Volume
let volumeBtn = document.querySelector('.fa-volume')
let volumeModal = document.querySelector('.volume-popup-modal')
volumeBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    volumeModal.style.transform = 'none'
})

document.body.addEventListener('click', () => {
    volumeModal.style.transform = 'translateY(-1000px)'
})

//Randomize
randomBtn = document.querySelector('#randomize')
if (localStorage.randomize === 'true') {
    randomBtn.style.color = getComputedStyle(document.documentElement)
    .getPropertyValue('--buttonbg2');
}

randomBtn.addEventListener('click', () => {
    if (localStorage.randomize != 'true') {
        randomBtn.style.color = getComputedStyle(document.documentElement)
        .getPropertyValue('--buttonbg2');
        localStorage.randomize = "true"
    } else {
        randomBtn.style.color = 'grey'
        localStorage.randomize = "false"
    }
})