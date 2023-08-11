// const firstName = 'Danya'
// const lastName = 'Pushtrinov'

// console.log(firstName.length)
// console.log(firstName.indexOf('a'))
// console.log(firstName.toLowerCase())
// console.log(firstName.toUpperCase())
// console.log(firstName.split('').join('---'))
// console.log(firstName.length > 5 ? 'Длинное' : 'Короткое')
// console.log(firstName.charAt(0))
// console.log(firstName.startsWith('Dan'))
// console.log(firstName.endsWith('ya'))

// setTimeout( function () {
//     hello(firstName)}, 2000)

// setInterval( function () {
//     hello(firstName)}, 1500)

// let counter = 0
// setInterval( function () {
//     if (counter === 5) {
//         clearInterval()
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// function hello (name) {
//     console.log(`Hello, ${name}!`)
// }

// const pow = (a, n) => Math.pow(a, n)

// console.log(pow(2, 16))

let mode = 'full'
const tablo = document.getElementById('tablo')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

setInterval(update, 1000)
update()

function switchMode (name) {
    mode = name
    update()
}

function update () {
    tablo.textContent = format(mode)
}

function format (formatMode) {
    const date = new Date()
    switch (formatMode) {
        case 'full':
            return date.toLocaleTimeString() + ' ' + date.toLocaleDateString()
        case 'date':
            return date.toLocaleDateString()
        case 'time':
            return date.toLocaleTimeString()
        default:
            return date.toLocaleTimeString()
    }
}

fullBtn.onclick = () => {switchMode('full')}
dateBtn.onclick = () => {switchMode('date')}
timeBtn.onclick = () => {switchMode('time')}