import { useEffect, useState} from 'react'
import { useParams } from 'react-router'
import DateSelector from '../components/DateSelector'
import TableComponent from '../components/TableComponent'
import { getApi } from '../services/despesas/apiDespesas'

export default function TableScreen() {

  const [despesas, setDespesas] = useState([])
  const [total, setTotal] = useState('')
  const { date } = useParams()

  useEffect(() => {
    getApi(date)
    .then((despesas) => {
      let filter = despesas.filter(despesa => despesa.mes === date)
      .sort((a,b) => a.dia > b.dia ? 1 : a.dia < b.dia ? -1 : 0)

      let totalValue = 0
      for (const each of filter) {
        totalValue += each.valor
      }
      
      setTotal(totalValue.toFixed(2))
      setDespesas(filter)
    })
  }, [date])

    return (
        <div>
            <DateSelector total={total} date={date}/>
            <TableComponent despesas={despesas}/>
        </div>
    )
}
