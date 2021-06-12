import { useState } from 'react'
import Button from '../components/Button'
import FlashCard from '../components/FlashCard'
import FlashCards from '../components/FlashCards'
import Header from '../components/Header'
import Main from '../components/Main'
import RadioButton from '../components/RadioButton'
import { allFlashCards } from '../data/allFlashCards'  

import { helperShuffleArray }from '../helpers/arrayHelpers'

export default function FlashCardsPage() {

    const [allCards, setAllCards] = useState(allFlashCards)
    const [showTitle, setShowTitle] = useState(true)


    function handleButtonClick() {
        const shuffledCards = helperShuffleArray(allCards)
        
        setAllCards(shuffledCards)
    }

    function handleRadioShowTitle() {
        setShowTitle(true)
    }

    function handleRadioShowDescription() {
        setShowTitle(false)
    }

    return (
        <>
            <Header>react-flash-cards-v1</Header>
            <Main>
                <div className="text-center mb-4">
                    <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
                </div>

                <div className="flex flex-row m-4 items-center justify-center space-x-4">
                    <RadioButton id="radioButtonShowTitle" name="showInfo" 
                                 buttonChecked={showTitle} onButtonClick={handleRadioShowTitle}>Mostrar título</RadioButton>

                    <RadioButton id="radioButtonShowDescription" name="showInfo" 
                                 buttonChecked={!showTitle} onButtonClick={handleRadioShowDescription}>Mostrar Descrição</RadioButton>
                </div>


                <FlashCards>
                    {allCards.map(({id, title, description}) => {
                        return (<FlashCard key={id} 
                                description={description} title={title}
                                showFlashCardTitle={showTitle}/>)
                    })}
                </FlashCards>
            </Main>

        </>
    )
}
