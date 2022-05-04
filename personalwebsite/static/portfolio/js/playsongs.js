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
