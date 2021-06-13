import { apiGetAllCities } from '../services/citiesServices/apiService'
import { useEffect, useState } from 'react';
import _ from 'lodash'

import ComboCity from "../components/ComboCity";
import Header from "../components/Header";

export default function ElectionsInfo() {

    const [allCities, setAllCities] = useState([])


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

    return (
        <>
            <Header />

            <ComboCity>
                <select className="bg-gray-50 shadow-lg rounded-lg" name="cities" id="citySelectId">
                    {allCities.map(city => {
                        return <option key={city.id} value={city.name}>
                            {city.name}
                        </option>
                    })}
                </select>
            </ComboCity>
        </>
    )
}
