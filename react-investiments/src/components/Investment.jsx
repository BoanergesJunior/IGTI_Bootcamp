export default function Investment({
    InvestmentData = [], 
}) {
    return (
        <div className="flex flex-row">
            <label className="mr-5">
                {InvestmentData.month}
            </label>
            <span>{InvestmentData.value}</span>
        </div>
    )
}
