let select = document.querySelector("select")
let option = document.querySelectorAll("option")
let confirmed = document.getElementById('confirmed')
let death = document.getElementById('death')
let recovered = document.getElementById('recovered')
let active = document.getElementById('active')
let input = document.querySelector('input')
let activesId = document.getElementById('actives')

function fetchJson(url){
    return fetch(url)
    .then((r) => r.json())
}

async function init() {
    let countries = await fetchJson('https://api.covid19api.com/countries')
    let summaries = await fetchJson('https://api.covid19api.com/summary')  
    
    renderData(countries, summaries)
}
init()

function renderData(countries, summaries){
    
    for (const country of countries) { 
        let countryOption = document.createElement("option")
        countryOption.textContent = country.Country
        countryOption.value = country.Country
        select.appendChild(countryOption)
    }
    summary(summaries)
}

function defaultStatus(summaries){
    const date = new Date(summaries.Global.Date)

    activesId.textContent = "Atualizações"

    confirmed.textContent = summaries.Global.TotalConfirmed
    death.textContent = summaries.Global.TotalDeaths
    recovered.textContent = summaries.Global.TotalRecovered
    active.textContent = `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getFullYear()} 
    ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
}

function summary(summaries){
    
    defaultStatus(summaries)
    let countries = summaries.Countries
    

    select.addEventListener('change', () => {
        if(select.value == 'Global'){
            defaultStatus(summaries)
        }
        else {
            for (let i = 0; i < countries.length ; i++) {
                if(countries[i].Country == select.value){
                    confirmed.textContent = countries[i].TotalConfirmed
                    death.textContent = countries[i].TotalDeaths
                    recovered.textContent = countries[i].TotalRecovered

                    activesId.textContent = "Ativos"

                }
            }
        }
        searchByDate(summaries)
    })
    input.addEventListener('change', () => {
        //fazer esssa parte
        console.log('object');
    })
}


async function searchByDate(summaries){
    let countries = summaries.Countries
    let slug = ""
    let date = ""

    for (let i = 0; i < countries.length ; i++) {
        if(countries[i].Country == select.value){
           slug = countries[i].Slug
           date = countries[i].Date
        }
    }
    let countryData = await fetchJson(`https://api.covid19api.com/country/${slug}?from=2020-03-01T00:00:00Z&to=${date}`)

    let activeStatus = 0
    countryData.forEach(element => {
        activeStatus += element.Active
    });

    active.textContent = activeStatus
}


    

