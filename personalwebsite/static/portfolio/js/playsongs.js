let audiocheckbox = document.querySelector('#togglesong')
let playerModal = document.querySelector('.music-player-modal')
let closeBtn = document.querySelector('#close-player')
let show = document.querySelector('.show')
let imageContainer = document.querySelector('.img-container')
let musicInfo = document.querySelector('.music-info')

// // Show player
// audiocheckbox.addEventListener('click', function() {
//     playerModal.classList.remove('show')
//     // document.body.style.position = 'fixed'
//     // document.body.style.top = `-${window.scrollY}px`
// })

// Show player
imageContainer.addEventListener('click', function() {
    if (playerModal.classList.contains('show')) {
         playerModal.classList.remove('show')
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
    }
})

// Show player
musicInfo.addEventListener('click', function() {
    if (playerModal.classList.contains('show')) {
         playerModal.classList.remove('show')
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`

    }
})


// Hide player
closeBtn.addEventListener('click', function () {
    playerModal.classList.add('show')
    document.body.style.position = ''
    document.body.style.top = ''
})
