var checkbox = document.querySelector("#toggledark")
var rot = 360
var theme = localStorage.getItem('theme')
var html = document.querySelector("html")

if (theme === 'dark') {
    toggleDarkMode(html)
} else {
    toggleLightMode(html)
}

checkbox.addEventListener('click', function() {
    var html = document.querySelector("html")

    if (html.classList.contains('dark-mode')) {
        toggleLightMode(html)
    } else {
        toggleDarkMode(html)
    }
})

function toggleLightMode(html) {
    checkbox.querySelector('i').classList.remove('fa-sun')
    checkbox.querySelector('i').classList.add('fa-moon')
    html.classList.remove('dark-mode')
    checkbox.querySelector('i').style.transform = "rotate(" + rot + "deg)"
    rot += 360
    localStorage.setItem('theme', 'light')
}

function toggleDarkMode(html) {
    checkbox.querySelector('i').classList.remove('fa-moon')
    checkbox.querySelector('i').classList.add('fa-sun')
    html.classList.add('dark-mode')
    checkbox.querySelector('i').style.transform = "rotate(" + rot + "deg)"
    rot += 360
    localStorage.setItem('theme', 'dark')
}


