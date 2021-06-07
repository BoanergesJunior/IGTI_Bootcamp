import { reports } from '../data/investments'
import Investment from './Investment'
import _ from 'lodash'

export default function Data({id, TotalPercentage}) {   

    // const filter = reports.filter(reportsData => reportsData.investmentId === id)

    let filter = _.filter(reports, reportsData => reportsData.investmentId === id)
    let ordered = _.orderBy(filter, 'month', 'asc')

    function calcPorcentage(profit, valueBefore) {
        return profit*100/valueBefore
    }

    function handleProfit(index) {
        if(index !== 0){
            let profit = ordered[index].value - ordered[index - 1].value
            let porcentage = calcPorcentage(profit, ordered[index - 1].value)
            let profitData =  profit > 0 ? 'text-green-600' : 'text-red-600'
            return [porcentage, profitData.toString()]
        }
        return [ 0.0, ordered[index].value]
    }

    let total = ordered[ordered.length - 1].value - ordered[0].value
    total = total.toFixed(2)

    let percentage = (total/100).toFixed(2)
    let colorPercentage = percentage > 0 ? 'text-green-500' : 'text-red-500'

    return (
        <div>
            <span className={`${colorPercentage} mt-1`}>Rendimento Total: R$ {total} ({percentage}%)</span>

            {ordered.map((filtered, index) => {
                let Profit = handleProfit(index)
                return (
                    <Investment key={filtered.id} InvestmentData={filtered} Profit={Profit}/>
                )
            })}
        </div>
    )
}
