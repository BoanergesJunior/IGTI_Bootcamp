import { useState } from 'react'
import Countries from '../components/Countries'
import Header from '../components/Header'
import Main from '../components/Main'
import TextInput from '../components/TextInput'

import { allCountries } from '../data/countries'

export default function ReactCountriesPage() {

  const [countryFilter, setContryFilter] = useState('') 
  const [visitedCountries, setVisitedCountries] = useState('')


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
      console.log(visitedCountries)
      let newVisitedCountries = [...visitedCountries]

      if(newVisitedCountries.indexOf(countryId) !== -1){
        newVisitedCountries = newVisitedCountries
        .filter(visitedCountryId => visitedCountryId !== countryId)
      }
      else {
        newVisitedCountries.push(countryId)
      }

      console.log(newVisitedCountries)
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

          <Countries onCountryClick={toggleVisitedCountry}>
            {filteredCountries}
          </Countries>

        </Main>
      </div>
    )
}
