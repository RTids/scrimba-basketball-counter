let home = 0
let guest = 0

let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

function home1() {
    home += 1
    homeScore.textContent = home
}

function home2() {
    home += 2
    homeScore.textContent = home
}

function home3() {
    home += 3
    homeScore.textContent = home
}

function guest1() {
    guest += 1
    guestScore.textContent = guest
}

function guest2() {
    guest += 2
    guestScore.textContent = guest
}

function guest3() {
    guest += 3
    guestScore.textContent = guest
}

function clearGame() {
    guest = 0
    home = 0
    guestScore.textContent = '0'
    homeScore.textContent = '0'
}
