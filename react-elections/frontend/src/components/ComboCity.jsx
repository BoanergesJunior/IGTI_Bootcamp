export default function ComboCity({
    children
}) {
    
    // console.log(getAllCities)
    
    return (
        <div className="flex flex-col items-center m-5">
            <span className="p-2 font-mono">Escolha o município</span>
            {children}
        </div>
    )
}
