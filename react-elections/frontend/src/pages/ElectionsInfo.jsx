import { apiGetAllCities } from '../services/citiesServices/apiService'
import { useEffect, useState } from 'react';
import _ from 'lodash'

import ComboCity from "../components/ComboCity";
import Header from "../components/Header";
import Main from '../components/Main';
import Title from '../components/Title';
import CardCanditate from '../components/CardCanditate';

export default function ElectionsInfo() {

    const [allCities, setAllCities] = useState([])
    const [selectedCity, setSelectedCity] = useState('')

    useEffect(() => {
        async function getAllCitiesOrdered() {
            try{
                const cities = await apiGetAllCities()
                const orderedCities = _.sortBy(cities, ['name'])
                setAllCities(orderedCities)
            } catch (err){
                console.log(err)
            }
        }

        getAllCitiesOrdered()
    }, [])

    function handleChangeSelected(cityName) {
        setSelectedCity(cityName)
    }

    return (
        <>
            <Header />

            <Main>
                <ComboCity arrayOfAllCities={allCities} onSelectedCity={handleChangeSelected}/>            
                <Title arrayOfAllCities={allCities} comboSelectedCity={selectedCity}>Eleições em {selectedCity}</Title>
                
                <div className="flex flex-row flex-wrap  justify-center max-w-5xl">
                    <CardCanditate />
                    <CardCanditate />
                    <CardCanditate />
                </div>
                    
            </Main>
        </>
    )
}
