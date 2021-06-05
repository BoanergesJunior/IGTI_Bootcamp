import { Fragment, useState, useEffect } from 'react';
import DateInput from './components/DateInput';
import Header from './components/Header'
import Main from './components/Main';
import TextInput from './components/TextInput';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';
// import Test from './components/Test'

export default function App() {

  const [name, setName] = useState('Boanerges')
  const [birthDate, setBirthDate] = useState('1997-09-08')

  useEffect(() => {
    document.title = name
  }, [name])

  function handleNameChange(newName) {
    setName(newName)
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate)
  }

  return (
    <Fragment>
      <Header>Componente Header</Header>
      <Main>
        <TextInput id={getNewId()} labelDescription="Digite seu nome: " inputValue={name} onInputChange={handleNameChange}/>
        <DateInput id={getNewId()} labelDescription="Digite a sua data de nascimento: " inputValue={birthDate} onInputChange={handleBirthDateChange}/>

        <p>O seu nome é {name} com {name.length} caracteres e {getAgeFrom(birthDate)} anos</p>
      </Main>
    </Fragment>
  );
}

// {/* <Test number={10} string="Teste" visible data={{a: 1, b: 2}}/> */}