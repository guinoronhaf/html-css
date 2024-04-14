/*let month = 4
let m = month - 1
let year = 2022
let y = year + 1
let day = 14
let now = new Date()
let now_year = now.getFullYear()
let now_month = now.getMonth()
let now_day = now.getDate()

function calc() {
    var mm = 11 - (Math.abs(now_month - m))
    var yy = (now_year - y) - (Math.floor(mm/11))
    var dd = Math.abs(now_day - day)
    return [yy, mm - (11 * Math.floor(mm/11)), dd]
}

console.log(calc())
getFullyear  --> pega o ano completo;
getDate --> pega o dia do mês certinho;
getDay --> pega os dias da semana de 0 a 6 com 0 sendo o domingo e 6 sendo o sábado;
getMonth --> pega os meses do ano de 0 a 11 com 0 sendo janeiro e 11 sendo dezembro;*/

//max --> 11


let month = 10
let m = month - 1
let year = 2022
let day = 14
let now = new Date()
let now_year = now.getFullYear()
let now_month = now.getMonth()
let now_day = now.getDate()

function calc() {
    let mm =  Math.abs(now_month - m)
    let yy = now_year - year - 1
    return [yy, mm]
}

console.log(calc())
