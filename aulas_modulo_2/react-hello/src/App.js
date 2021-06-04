import { Fragment, useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';
// import Test from './components/Test'

export default function App() {

  const [name, setName] = useState('Boanerges')
  
  function handleNameChange(event) {
    const newName = event.currentTarget.value
    setName(newName)
  }

  return (
    <Fragment>
      <Header>Componente Header</Header>
      <Main>
        <div className="flex flex-col my-4">
          <label className="text-sm text-gray-500 mb-2" htmlFor="inputName">Digite o seu nome: </label>
          <input autoFocus id="inputName" className="border p-1" type="text" value={name} onChange={handleNameChange}/>
        </div>
        <p>O seu nome é {name} com {name.length} caracteres</p>
      </Main>
    </Fragment>
  );
}

// {/* <Test number={10} string="Teste" visible data={{a: 1, b: 2}}/> */}