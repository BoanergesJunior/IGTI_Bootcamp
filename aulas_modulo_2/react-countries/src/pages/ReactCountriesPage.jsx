import { useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import TextInput from '../components/TextInput'

import { allCountries } from '../data/countries'

export default function ReactCountriesPage() {

  const [countryFilter, setContryFilter] = useState('Argentina') 

  function handleCountryFilterChange(newCountryFilter) {
    setContryFilter(newCountryFilter)
  }

  const countryFilterToLowerCase = countryFilter.trim().toLocaleLowerCase()

  const filteredCountries = 
    countryFilterToLowerCase.length >= 3 ?
    allCountries.filter(({nameLowerCase}) => {
      return nameLowerCase.includes(countryFilterToLowerCase)
    }) : allCountries

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
        </Main>
      </div>
    )
}
