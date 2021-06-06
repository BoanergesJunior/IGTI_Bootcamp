import { useState } from 'react'
import Countries from '../components/Countries'
import Country from '../components/Country'
import Header from '../components/Header'
import Main from '../components/Main'
import TextInput from '../components/TextInput'

import { allCountries } from '../data/countries'

export default function ReactCountriesPage() {

  const [countryFilter, setContryFilter] = useState('') 
  const [visitedCountries, setVisitedCountries] = useState([])

  function handleCountryFilterChange(newCountryFilter) {
    setContryFilter(newCountryFilter)
  }
  
  const countryFilterToLowerCase = countryFilter.trim().toLocaleLowerCase()

  const filteredCountries = 
    countryFilterToLowerCase.length >= 3 ?
    allCountries.filter(({nameLowerCase}) => {
      return nameLowerCase.includes(countryFilterToLowerCase)
    }) : allCountries

    function toggleVisitedCountry(countryId) {
      let newVisitedCountries = [...visitedCountries]

      if(newVisitedCountries.indexOf(countryId) !== -1){
        newVisitedCountries = newVisitedCountries
        .filter(visitedCountryId => visitedCountryId !== countryId)
      }
      else {
        newVisitedCountries.push(countryId)
      }
      setVisitedCountries(newVisitedCountries)
    }

  return (
    <div>
        <Header>React-coutries</Header> 
        <Main>
          <TextInput
            id="inputCountrieFilter"
            labelDescription="Informe o nome do país pelo menos 3 caracteres"
            inputValue={countryFilter}
            onInputChange={handleCountryFilterChange}
            autoFocus/>

          {/* <Countries onCountryClick={toggleVisitedCountry} visitedCountries={visitedCountries}>
            {filteredCountries}
          </Countries> */}

          <Countries>
            <h2 className="text-center font-semibold">{filteredCountries.length} país(es)</h2>
            <h3 className="text-center font-semibold text-sm">{visitedCountries.length} país(es) visitado(s)</h3>

            {filteredCountries.map(country => {
                  const isVisited = visitedCountries.indexOf(country.id) !== -1
                  return( 
                      <Country
                          isVisited={isVisited}
                          onCountryClick={toggleVisitedCountry} 
                          key={country.id}>{country}
                      </Country>)
                  })
            }
          </Countries>

        </Main>
      </div>
    )
}
