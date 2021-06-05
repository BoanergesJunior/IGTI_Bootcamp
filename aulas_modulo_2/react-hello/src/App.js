import { Fragment, useState, useEffect } from 'react';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import Header from './components/Header'
import Main from './components/Main';
import OnlineOffline from './components/OnlineOffline';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';
// import Test from './components/Test'

export default function App() {

  const [name, setName] = useState('Boanerges')
  const [birthDate, setBirthDate] = useState('1997-09-08')
  const [showTimer, setShowTimer] = useState(false)
  const [isOnline, setIsOnline] = useState(true)


  useEffect(() => {
    document.title = name
  }, [name])

  function toggleIsOnline() {
    setIsOnline(true)
  }

  function toggleIsOffline() {
    setIsOnline(false)
  }

  useEffect(() => {
    window.addEventListener('online', toggleIsOnline)
    window.addEventListener('offline', toggleIsOffline)

    return () => {
      window.removeEventListener('online', toggleIsOnline)
      window.removeEventListener('offline', toggleIsOffline)
    }

  }, []) 

  function handleNameChange(newName) {
    setName(newName)
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate)
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer)
  }

  return (
    <Fragment>
      <Header>Componente Header</Header>
      <Main>
        
        <OnlineOffline isOnline={isOnline}/>

        {showTimer && (
          <div className='text-right mt-1'>
            <Timer />
          </div>
        )}

        <CheckboxInput labelDescription='Mostrar cronômetro' onCheckboxChange={toggleShowTimer}/>

        <TextInput id={getNewId()} labelDescription="Digite seu nome: " inputValue={name} onInputChange={handleNameChange}/>
        <DateInput id={getNewId()} labelDescription="Digite a sua data de nascimento: " inputValue={birthDate} onInputChange={handleBirthDateChange}/>

        <p>O seu nome é {name} com {name.length} caracteres e {getAgeFrom(birthDate)} anos</p>
      </Main>
    </Fragment>
  );
}

// {/* <Test number={10} string="Teste" visible data={{a: 1, b: 2}}/> */}