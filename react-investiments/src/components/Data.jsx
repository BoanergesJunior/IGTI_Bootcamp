import { reports } from '../data/investments'
import Investment from './Investment'

export default function Data({id}) {   

    const filter = reports.filter(reportsData => reportsData.investmentId === id)

    console.log(filter)

    return (
        <div className="mt-3">
            {filter.map(filtered => {
                return (
                    <Investment key={filtered.id} InvestmentData={filtered}/>
                )
            })}
        </div>
    )
}
