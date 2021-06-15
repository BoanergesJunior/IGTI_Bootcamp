import { apiGetAllCities } from '../services/citiesServices/apiService'
import { apiGetAllCandidates } from '../services/candidatesSevices/apiService'
import { apiGetAllElection } from '../services/electionServices/apiService'
import { useEffect, useState } from 'react';
import _ from 'lodash'

import ComboCity from "../components/ComboCity";
import Header from "../components/Header";
import Main from '../components/Main';
import Title from '../components/Title';
import CardCandidate from '../components/CardCandidate';

export default function ElectionsInfo() {

    const [allCities, setAllCities] = useState([])
    const [selectedCity, setSelectedCity] = useState('Asgard')
    const [allCandidates, setAllCandidates] = useState([])
    const [allElection, setAllElection] = useState([])
    const [electionFilteredByCity, setElectionFilteredByCity] = useState([])

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

    useEffect(() => {
        async function getAllCandidates() {
            const candidates = await apiGetAllCandidates()

            setAllCandidates(candidates)
        }

        getAllCandidates()
    }, [])

    useEffect(() => {
        async function getAllElections() {
            const election = await apiGetAllElection()

            setAllElection(election)
        }

        getAllElections()
    }, [])

    function handleChangeSelected(cityName) {
        setSelectedCity(cityName)
    }

    useEffect(() => {
        const cityName = selectedCity.length === 0 ? 'Asgard' : selectedCity
        const city = _.filter(allCities, {name: cityName})
        const electionFiltered = _.filter(allElection, {cityId: city[0].id})  
        setElectionFilteredByCity(electionFiltered)
    }, [selectedCity, allCities, allCandidates])

    return (
        <>
            <Header />

            <Main>
                <ComboCity arrayOfAllCities={allCities} onSelectedCity={handleChangeSelected}/> 
                {allCities.length !== 0 &&            
                    <Title arrayOfAllCities={allCities} comboSelectedCity={selectedCity}>Eleições em {selectedCity}</Title>
                }

                <div className="flex justify-center max-w-5xl">                   
                    {electionFilteredByCity.map(candidates => { 
                        return <CardCandidate key={candidates.name} arrayOfAllCandidates={allCandidates} infoElection={electionFilteredByCity}/>
                    })}
                </div>
                    
            </Main>
        </>
    )
}
