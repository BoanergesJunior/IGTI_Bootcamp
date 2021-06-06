export default function Country({children: country = null}) {
    
    if(!country)
        return <div>Impossível renderizar o país</div>

    return (
        <div>
            {country.name}
        </div>
    )
}
