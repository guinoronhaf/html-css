// DOM elements
const adviceTitle = document.querySelector('#advice_title');
const adviceContent = document.querySelector('#advice_content');
const dice = document.querySelector('#dice');

// async function to get data by API
async function getAdvice() {
    
    const endpoint = 'https://api.adviceslip.com/advice';

    const res = await fetch(endpoint)
        .then(res => res.json())
        .then((data) => {
            const id = data.slip.id;
            const advice = data.slip.advice;
            adviceTitle.innerText = `ADVICE #${id}`;
            adviceContent.innerText = `"${advice}"`;
        })
        .catch(err => console.log(`ERROR: ${err}`))

};

// setting events
dice.addEventListener("click", () => {
    getAdvice()
});