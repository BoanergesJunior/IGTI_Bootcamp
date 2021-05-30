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

    let [summary, filter] = await Promise.allSettled([
        fetch('https://api.covid19api.com/summary'),
        fetch(`https://api.covid19api.com/country/${country.value}?from=${dateStart.value}T00:00:00Z&to=${dateEnd.value}T00:00:00Z`)
    ]) 

    let summaryData = await summary.value.json()
    let findDataByFilter = await filter.value.json()
        
    let countries = summaryData.Countries
    let countryData = (countries || []).find(element => element.Country == country.value) 

    buildDailyChart(findDataByFilter)
    loadTotalDatas(countryData)
}

let newChart = new Chart(document.getElementById('linhas'), {
    type: 'line',
})
function buildDailyChart(findDataByFilter){

    let arrayOfDate = []
    for (const index in findDataByFilter) {
        let data = formatDate(new Date(findDataByFilter[index].Date).toISOString())
        arrayOfDate.push(data)
    }

    let arrayOfDeaths = []
    for (const index in findDataByFilter) {
        arrayOfDeaths.push(findDataByFilter[index].Deaths)
    }

    newChart.data.labels = [...arrayOfDate]
    newChart.data.datasets[0] = {
        label: ['Número de mortes'],
        data: [...arrayOfDeaths],
        backgroundColor: 'orange',
        borderColor: 'orange'
    }

    // newChart.data.datasets[1] = {
    //     label: ['Média de mortes'],
    //     data: [4,3,2,1,0],
    //     backgroundColor: 'red',
    //     borderColor: 'red'
    // }
    newChart.update()
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
  