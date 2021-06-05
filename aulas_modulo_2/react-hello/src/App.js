import { Fragment, useState } from 'react';
import DateInput from './components/DateInput';
import Header from './components/Header'
import Main from './components/Main';
import TextInput from './components/TextInput';
// import Test from './components/Test'

export default function App() {

  const [name, setName] = useState('Boanerges')
  const [birthDate, setBirthDate] = useState('1997-09-08')

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
        <TextInput labelDescription="Digite seu nome: " inputValue={name} onInputChange={handleNameChange}/>
        <DateInput labelDescription="Digite a sua data de nascimento: " inputValue={birthDate} onInputChange={handleBirthDateChange}/>

        <p>O seu nome é {name} com {name.length} caracteres</p>
      </Main>
    </Fragment>
  );
}

// {/* <Test number={10} string="Teste" visible data={{a: 1, b: 2}}/> */}