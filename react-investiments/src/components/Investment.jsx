export default function Investment({
    InvestmentData = {}, 
    Profit = [],
}) {

    function getDate(month, year) {
        var months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]

        return `${months[month - 1]}/${year}`
    }

    function roundValue(value) {
        return value.toFixed(2).toString()
    }

    return (
        <div className={`font-serif flex flex-row space-x-36 p-1 ${Profit[1]} shadow-sm hover:bg-gray-200`}>
            <label className="mr-5 text-sm">
                {getDate(InvestmentData.month, InvestmentData.year)}
            </label>
            <span>R$ {roundValue(InvestmentData.value)}</span>
            <span>{`${Math.round(Profit[0])}%`}</span>
        </div>
    )
}
