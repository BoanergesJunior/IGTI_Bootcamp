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
    const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true)


    function handleButtonClick() {
        const shuffledCards = helperShuffleArray(allCards)
        
        setAllCards(shuffledCards)
    }

    function handleRadioShowTitle() {
        const updatedCard = [...allCards]
        .map(card => card.showTitle = ({
            ...card, 
            showTitle: true
        }))

        setAllCards(updatedCard)
        setRadioButtonShowTitle(true)
    }

    function handleRadioShowDescription() {
        const updatedCard = [...allCards]
        .map(card => card.showTitle = ({
            ...card, 
            showTitle: false
        }))

        setAllCards(updatedCard)
        setRadioButtonShowTitle(false)
    }

    function handleToggleFlashCard(cardId) {
        const updatedCard = [...allCards]
        const cardIndex = updatedCard.findIndex(card => cardId === card.id)
        updatedCard[cardIndex].showTitle = !updatedCard[cardIndex].showTitle

        setAllCards(updatedCard)
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
                                 buttonChecked={radioButtonShowTitle} onButtonClick={handleRadioShowTitle}>Mostrar título</RadioButton>

                    <RadioButton id="radioButtonShowDescription" name="showInfo" 
                                 buttonChecked={!radioButtonShowTitle} onButtonClick={handleRadioShowDescription}>Mostrar Descrição</RadioButton>
                </div>


                <FlashCards>
                    {allCards.map(({id, title, description, showTitle}) => {
                        return (<FlashCard key={id} id={id}
                                description={description} title={title}
                                showFlashCardTitle={showTitle} onToggleFlashCard={handleToggleFlashCard}/>)
                    })}
                </FlashCards>
            </Main>

        </>
    )
}
