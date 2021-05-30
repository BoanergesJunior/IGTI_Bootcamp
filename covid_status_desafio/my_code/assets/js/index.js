(async () => {
    const api = await axios.create({
        baseURL: "https://api.covid19api.com"
    })

    try{
        const response = await api.get("/summary")
        buildDashboard(response.data)
    }
    catch(e){
        console.error(e);
    }
    
})();

function buildDashboard(summary) {
    let totalConfirmed = document.getElementById('confirmed')
    let totalDeaths = document.getElementById('death')
    let totalRecovered = document.getElementById('recovered')
    let updateDate = document.getElementById('date')

    totalConfirmed.textContent = summary.Global.TotalConfirmed.toLocaleString('PT')
    totalDeaths.textContent = summary.Global.TotalDeaths.toLocaleString('PT')
    totalRecovered.textContent = summary.Global.TotalRecovered.toLocaleString('PT')
    updateDate.textContent = `${updateDate.textContent} ${formatDate(new Date(summary.Global.Date))}`;

    buildBarChart(summary)
    buildPieChart(summary)
}

function buildBarChart(summary){

    let ctx = document.getElementById('barras')
    let countriesArray = summary.Countries

    let orderedListOfCoutriesByDeaths = foundTenMore(countriesArray)
    let [
        country1, country2, country3,country4, country5, country6, 
        country7, country8, country9, country10] = orderedListOfCoutriesByDeaths

    let chart = new Chart(ctx,{
        type:'bar',
        data:{
            labels: [country1.nameCountry, country2.nameCountry, country3.nameCountry, country4.nameCountry, 
                country5.nameCountry, country6.nameCountry, country7.nameCountry, country8.nameCountry,
                country9.nameCountry, country10.nameCountry],

            datasets: [{
                label: "Total de mortes por pais - Top 10",
                data: [country1.totalDeaths, country2.totalDeaths, country3.totalDeaths, country4.totalDeaths, 
                    country5.totalDeaths, country6.totalDeaths, country7.totalDeaths, country8.totalDeaths,
                    country9.totalDeaths, country10.totalDeaths],
                backgroundColor: 'purple',
            }]
        }
    });
}

function buildPieChart(summary) {

    let ctx = document.getElementById('pizza')
    let globalData = summary.Global

    let chart = new Chart(ctx,{
        type:'pie',
        data:{
            labels: ['Confirmados', 'Recuperados', 'Mortes'],
            datasets: [{
                label: "Distribuição de novos casos",
                data: [globalData.NewConfirmed, globalData.NewRecovered, globalData.NewDeaths],  
                backgroundColor: ['red', 'blue', 'yellow'],              
            }]
        }
    });
}

function foundTenMore(countriesArray) {
    
    let arrayOfDeaths = []
    
    countriesArray.forEach((element) => {
        let object = {
            nameCountry:  element.Country,
            totalDeaths: element.TotalDeaths,
        }
        arrayOfDeaths.push(object)
    });
    
    const orderedListOfCountriesByDeaths = arrayOfDeaths.sort((a, b) => {
        if(a.totalDeaths > b.totalDeaths){
            return -1;
        } else if(a.totalDeaths < b.totalDeaths){
            return 1;
        }
        return 0;
    })
    
    return orderedListOfCountriesByDeaths
}

function formatDate(date) {
    let d = date;
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes(),
    ].map((c) => c.slice(-2));
  
    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":")
}
