const dayText = document.querySelector('#dayText')
const monthText = document.querySelector('#monthText')
const yearText = document.querySelector('#yearText')

const daysText = document.querySelector('#days')
const monthsText = document.querySelector('#months')
const yearsText = document.querySelector('#years')

const dayInput = document.querySelector('#iday')
const monthInput = document.querySelector('#imonth')
const yearInput = document.querySelector('#iyear')

const dayError = document.querySelector('#dayError')
const monthError = document.querySelector('#monthError')
const yearError = document.querySelector('#yearError')

const btn = document.querySelector('.circle')

const d = new Date()
let dayFlag = false
let monthFlag = false
let yearFlag = false
let dmyFlag = false

btn.addEventListener("click", () => {
    //day to month verification
    if (monthInput.value == 1 && dayInput.value > 31) {
        dmyFlag = false
    } else if (monthInput.value == 2 && dayInput.value > 28) {
        dmyFlag = false
    } else if (monthInput.value == 3 && dayInput.value > 31) {
        dmyFlag = false
    } else if (monthInput.value == 4 && dayInput.value > 30) {
        dmyFlag = false
    } else if (monthInput.value == 5 && dayInput.value > 31) {
        dmyFlag = false
    } else if (monthInput.value == 6 && dayInput.value > 30) {
        dmyFlag = false
    } else if (monthInput.value == 7 && dayInput.value > 31) {
        dmyFlag = false
    } else if (monthInput.value == 8 && dayInput.value > 31) {
        dmyFlag = false
    } else if (monthInput.value == 9 && dayInput.value > 30) {
        dmyFlag = false
    } else if (monthInput.value == 10 && dayInput.value > 31) {
        dmyFlag = false
    } else if (monthInput.value == 11 && dayInput.value > 30) {
        dmyFlag = false
    } else if (monthInput.value == 12 && dayInput.value > 31) {
        dmyFlag = false
    } else {
        dmyFlag = true
    }
})

//day empty value check
if (dayInput.value == '') {
    dayError.textContent = 'You must fulfill this field'
    dayFlag = false
    //day validation
} else if (dayInput.value <= 0 || dayInput.value > 31) {
    dayError.textContent = 'Must be a valid day'
    dayFlag = false
} else {
    dayError.textContent = ''
    dayFlag = true
}

//month empty value check
if (monthInput.value == '') {
    monthError.textContent = 'You must fulfill this field'
    monthFlag = false
    //month validation
} else if (monthInput.value <= 0 || monthInput.value > 12) {
    monthError.textContent = 'Must be a valid month'
    monthFlag = false
} else {
    monthError.textContent = ''
    monthFlag = true
}

//year empty value check
if (yearInput.value == '') {
    yearError.textContent = 'You must fulfill this field'
    yearFlag = false
    //year validation
} else if (yearInput.value <= 0) {
    yearError.textContent = 'Must be a valid year'
    yearFlag = false
} else if (yearInput.value > d.getFullYear()) {
    yearError.textContent = 'Must be in the past'
    yearFlag = false
} else {
    yearError.textContent = ''
    yearFlag = true
}

//current date validation
if (yearInput.value == d.getFullYear()) {
    if (monthInput.value > d.getMonth() + 1) {
        monthError.textContent = 'Must be in the past'
        monthFlag = false
    } else if (monthInput.value == d.getMonth() + 1) {
        if (dayInput.value >= d.getDate()) {
            dayError.textContent = 'Must be in the past'
            dayFlag = false
        }
    }
}

//flag activation
if (dmyFlag == false) {
    dayError.textContent = 'Must be a valid day'
        dayFlag = false
        monthFlag = false
        yearFlag = false
}
if (dayFlag == false) {
    dayText.style.color = 'hsl(0, 100%, 67%)'
    dayInput.style.border = '1px solid hsl(0, 0%, 86%)'
}
if (monthFlag == false) {
    monthText.style.color = 'hsl(0, 100%, 67%)'
    monthInput.style.border = '1px solid hsl(0, 0%, 86%)'
}
if (yearFlag == false) {
    yearText.style.color = 'hsl(0, 100%, 67%)'
    yearInput.style.border = '1px solid hsl(0, 0%, 86%)'
} else {
    yearText.style.color = 'hsl(0, 1%, 44%)'
    yearInput.style.border = '2px solid hsl(0, 0%, 86%)'
}

//age calculator
if (
    dayFlag == true &&
    monthFlag == true &&
    yearFlag == true &&
    dmyFlag == true
) {
    var dob = new Date(yearInput.value, monthInput.value - 1, dayInput.value)

    var yearDob = dob.getFullYear()
    var monthDob = dob.getMonth()
    var dateDob = dob.getDate()

    var yearNow = d.getFullYear()
    var monthNow = d.getMonth()
    var dateNow = d.getDate()

    //year calculation
    yearAge = yearNow - yearDob

    //month calculation
    if (monthNow >= monthDob) var monthAge = monthNow - monthDob
    else {
        yearAge--
        var monthAge = 12 + monthNow - monthDob
    }

    //day calculation
    if (dateNow > dateDob) var dateAge = dateNow - dateDob
    else {
        monthAge--
        var dateAge = 31 + dateNow - dateDob

        if (monthAge < 0) {
            monthAge = 11
            yearAge--
        }
    }

    //text correction
    // if (yearAge > 1) yearsText.textContent = 'years'
    // else yearsText.textContent = 'year'
    // if (monthAge > 1) monthsText.textContent = 'months'
    // else monthsText.textContent = 'month'
    // if (dateAge > 1) daysText.textContent = 'days'
    // else daysText.textContent = 'day'
    daysText.textContent = dateAge
    monthsText.textContent = monthAge
    yearsText.textContent = yearAge
}