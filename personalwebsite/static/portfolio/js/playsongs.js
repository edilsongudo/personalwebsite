let playerModal = document.querySelector('.music-player-modal')
let closeBtn = document.querySelector('#close-player')
let show = document.querySelector('.show')

// Show player
show.addEventListener('click', function(e) {
    if (playerModal.classList.contains('show')) {
         playerModal.classList.remove('show')
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
    }
})

// Hide player
closeBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    playerModal.classList.add('show')
    document.body.style.position = ''
    document.body.style.top = ''
})
