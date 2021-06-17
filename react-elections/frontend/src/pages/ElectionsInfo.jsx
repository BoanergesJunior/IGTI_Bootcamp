import { apiGetAllCities } from '../services/citiesServices/apiService'
import { apiGetAllCandidates } from '../services/candidatesSevices/apiService'
import { apiGetAllElection } from '../services/electionServices/apiService'
import { useEffect, useState } from 'react';
import getNewId from '../helper/idGenerator'
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
    const [infoCandidates, setInfoCandidates] = useState([])
    const [maxPercentage, setMaxPercetage] = useState({})

    useEffect(() => {
        async function getAllCitiesOrdered() {
            try{
                const cities = await apiGetAllCities()
                const orderedCities = _.sortBy(cities, ['name'])

                setAllCities(orderedCities)
            } catch (err){
                console.log(err)
            }
            setTimeout(() => {
            
            }, 500);
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
        if(allCities.length !== 0){
            let city = _.filter(allCities, {name: selectedCity})
            const filtered = _.filter(allElection, {cityId: city[0].id})
            setElectionFilteredByCity(filtered)
        }
    }, [selectedCity])
    
    function getPercentage(presence, votes) {
        return (votes*100 / presence).toFixed(2)
    }

    useEffect(() => {
        const arrayInfo = []
        const findMaxPercentage = []
        if(electionFilteredByCity.length !== 0){
            electionFilteredByCity.map(candidate => {
                let nameCandidate = _.find(allCandidates, {id: candidate.candidateId})
                let infoVote = _.find(allCities, {name: selectedCity})

                let data = getPercentage(infoVote.presence, candidate.votes)

                const dataCandidate = {
                    idCard: getNewId(),
                    idCandidate: candidate.id,
                    name: nameCandidate.name,
                    username: nameCandidate.username,
                    votes: candidate.votes,
                    votingPopulation: infoVote.votingPopulation,
                    absence: infoVote.absence,
                    presence: infoVote.presence,
                    cityName: infoVote.name,
                    percentage: data
                }
                arrayInfo.push(dataCandidate)
                findMaxPercentage.push(parseFloat(dataCandidate.percentage))
            })            
        }
        
        let max = Math.max(...findMaxPercentage)
        let winnerCandidate = _.find(arrayInfo, {'percentage': max.toString()})
        setMaxPercetage(winnerCandidate)

        setInfoCandidates(arrayInfo)
    }, [electionFilteredByCity])   

    function setElected(candidate) {
        if(maxPercentage.username === candidate){
            return 'Eleito'
        }
        return 'Não eleito'
    }

    return (
        <>
            <Header />

            <Main>
                <ComboCity arrayOfAllCities={allCities} onSelectedCity={handleChangeSelected}/> 
                {allCities.length !== 0 &&            
                    <Title arrayOfAllCities={allCities} comboSelectedCity={selectedCity}>Eleições em {selectedCity}</Title>
                }

                <div className="flex flex-wrap justify-center max-w-5xl">                   
                    {infoCandidates.map(candidate => { 
                        return (
                            <CardCandidate key={candidate.idCard}>
                                <div className="shadow-xl w-48 h-44 rounded-sm m-2">
                                    <div className="flex flex-row items-center space-x-9 text-xs">
                                        <img src={`/images/${candidate.username}.png`} alt={candidate.username} className="w-14 rounded-full m-2"/>
                                        <div className="flex flex-col text-center">
                                            <span className="text-lg">{candidate.percentage}%</span>
                                            <span className="text-xs">{candidate.votes.toLocaleString()} votos</span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-center m-5">{candidate.name}</div>
                                    <div className="font-sans text-center">{setElected(candidate.username)}</div>
                                </div>
                            </CardCandidate>)
                    })}
                </div>
                    
            </Main>
        </>
    )
}
