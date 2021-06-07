import { useState } from "react"

export default function Investment({
    InvestmentData = [], 
}) {

    const [currentInvestment, setcurrentInvestment] = useState('')

    function getDate(month, year) {
        var months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]

        return `${months[month - 1]}/${year}`
    }

    function roundValue(value) {
        return value.toFixed(2).toString()
    }

    return (
        <div className="flex flex-row space-x-36">
            <label className="mr-5 font-serif text-sm">
                {getDate(InvestmentData.month, InvestmentData.year)}
            </label>
            <span className="">R$ {roundValue(InvestmentData.value)}</span>
            <span>Porcentage</span>
        </div>
    )
}
