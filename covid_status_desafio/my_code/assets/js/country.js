(async() => {
    const api = await axios.create({
        baseURL: 'https://api.covid19api.com'
    })

    try{
        const response = await api.get('/summary')
        populateComboBox(response)
    } catch(e) {
        console.log(e);
    }

    document.getElementById('filtro').addEventListener('click', handlerFilter)
})()

async function handlerFilter(){

    let dateStart = document.getElementById('date_start')
    let dateEnd = document.getElementById('date_end')
    let country = document.getElementById('cmbCountry')
    let selectFilterValue = document.getElementById('cmbData')

    let firstDateBeforeDateStart = getFirstDate(dateStart.value)

    let [summary, filter] = await Promise.allSettled([
        fetch('https://api.covid19api.com/summary'),
        fetch(`https://api.covid19api.com/country/${country.value}?from=${firstDateBeforeDateStart}T00:00:00Z&to=${dateEnd.value}T00:00:00Z`),
    ])

    let summaryData = await summary.value.json()
    let findDataByFilter = await filter.value.json()

    let countries = summaryData.Countries
    let countryData = (countries || []).find(element => element.Country == country.value) 

    buildDailyChart(findDataByFilter, selectFilterValue)
    loadTotalDatas(countryData)
}


let newChart = new Chart(document.getElementById('linhas'), {
    type: 'line',
})
function buildDailyChart(findDataByFilter, selectFilterValue){
    
    let dataSearch = selectFilterValue.value

    let arrayOfDate = []
    for (let index = 1; index < findDataByFilter.length; index++) {
        let data = formatDate(new Date(findDataByFilter[index].Date).toISOString())
        arrayOfDate.push(data)
    }

    let arrayOfData = []
    for (let index = 1; index < findDataByFilter.length; index++) {
       arrayOfData.push(dataValue(dataSearch, findDataByFilter[index]) - dataValue(dataSearch, findDataByFilter[index - 1]))
    }

    let total = 0
    for (const index in arrayOfData) {
        total += arrayOfData[index]
    }

    let average = total/arrayOfData.length

    let arrayOfAverage = []
    for (let index = 0; index < arrayOfData.length; index++) {
        arrayOfAverage.push(average)
    }

    newChart.data.labels = [...arrayOfDate]

    newChart.data.datasets[0] = {
        label: ['Número de mortes'],
        data: [...arrayOfData],
        backgroundColor: 'orange',
        borderColor: 'orange'
    }

    newChart.data.datasets[1] = {
        label: ['Média de mortes'],
        data: [...arrayOfAverage],
        backgroundColor: 'red',
        borderColor: 'red'
    }

    newChart.update()
}


function dataValue(dataSearch, findDataByFilter) {
    return dataSearch == 'Confirmed' ? findDataByFilter.Confirmed 
    : dataSearch == 'Deaths' ? findDataByFilter.Deaths 
    : dataSearch == 'Recovered' ? findDataByFilter.Recovered : -1
}

function populateComboBox(summary) {
    let combo = document.getElementById('cmbCountry')

    let countries = summary.data.Countries

    countries.sort((a, b) => {
        let x = a.Country
        let y = b.Country

        return x === y ? 0 : x > y ? 0 : -1
    })

    for(index in countries) {
        combo[combo.options.length] = new Option(
            countries[index].Country,
            countries[index].Country 
        )
    }
}

function loadTotalDatas(countryData) {
    let confirmed = document.getElementById('kpiconfirmed')
    let deaths = document.getElementById('kpideaths')
    let recovered = document.getElementById('kpirecovered')

    confirmed.textContent = countryData.TotalConfirmed.toLocaleString("PT")
    deaths.textContent = countryData.TotalDeaths.toLocaleString("PT")
    recovered.textContent = countryData.TotalRecovered.toLocaleString("PT")
}


function formatDate(date) {   
    let d = date.split('T')
    return d[0]
}

function getFirstDate(dateStart) {
    let d = new Date(dateStart);
    d.setTime(d.getTime() - 1);
    return (d.getUTCFullYear() + '-' +
           (d.getUTCMonth() + 1).toString().padStart(2, '0') + '-' +
            d.getUTCDate().toString().padStart(2, '0'));
}