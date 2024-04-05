var menu = document.querySelector('#menu')
var opt1 = document.getElementsByTagName('a')[0]
var opt2 = document.getElementsByTagName('a')[1]
var opt3 = document.getElementsByTagName('a')[2]
var opt4 = document.getElementsByTagName('a')[3]
var opt5 = document.getElementsByTagName('a')[4]
var opt6 = document.getElementsByTagName('a')[5]
var opt7 = document.getElementsByTagName('a')[6]
var opt8 = document.getElementsByTagName('a')[7]
var opt9 = document.getElementsByTagName('a')[8]
var opt10 = document.getElementsByTagName('a')[9]
var body = document.body
var hamb = document.querySelector('#hamb')


function mostra() {
    var menu = document.querySelector('#menu')
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function noturno() {
    body.style.background = 'black'
    body.style.color = 'white'
    hamb.style.color = 'white'
    opt1.style.color = 'white'
    opt2.style.color = 'white'
    opt3.style.color = 'white'
    opt4.style.color = 'white'
    opt5.style.color = 'white'
    opt6.style.background = 'black'
    opt6.style.color = 'white'
    opt7.style.background = 'black'
    opt7.style.color = 'white'
    opt8.style.background = 'black'
    opt8.style.color = 'white'
    opt9.style.background = 'black'
    opt9.style.color = 'white'
    opt10.style.background = 'black'
    opt10.style.color = 'white'
}