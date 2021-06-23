import { useEffect, useState} from 'react'
import getApi from './services/getDespesas'

function App() {

  const [despesas, setDespesas] = useState([])

  useEffect(() => {
    getApi()
    .then((despesas) => {
      setDespesas(despesas)
    })
  }, [])

  return (
    <div>
     ola
    </div>
  );
}

export default App;
