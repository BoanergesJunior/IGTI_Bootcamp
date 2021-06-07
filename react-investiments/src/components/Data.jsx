import { reports } from '../data/investments'
import Investment from './Investment'
import _ from 'lodash'

export default function Data({id}) {   

    // const filter = reports.filter(reportsData => reportsData.investmentId === id)

    let filter = _.filter(reports, reportsData => reportsData.investmentId === id)
    let ordered = _.orderBy(filter, 'month', 'asc')

    return (
        <div className="mt-3">
            {ordered.map(filtered => {
                return (
                    <Investment key={filtered.id} InvestmentData={filtered}/>
                )
            })}
        </div>
    )
}
