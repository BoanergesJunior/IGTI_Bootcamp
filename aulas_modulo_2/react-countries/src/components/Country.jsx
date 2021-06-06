import Item from "./Item"

export default function Country({children: country = null, onCountryClick = null}) {
    
    const {id, flag, name, capital, population, area, region} = country

    if(!country)
        return <div>Impossível renderizar o país</div>

    const demographcDensity = country.population / country.area

    function handleCountryClick() {
        if(onCountryClick)
            onCountryClick(id)
    }

    return (
        <div className="border p-2 m-2 flex flex-row items-center space-x-2"
            onClick={handleCountryClick}>
            
            <img className="w-48" src={flag} alt="flag"/>
            <ul>
                <li>
                    <Item label="Nome: ">{name}</Item>
                </li>
                <li>
                    <Item label="Capital: ">{capital}</Item>
                </li>
                <li>
                    <Item label="Região: ">{region}</Item>
                </li>
                <li>
                    <Item label="População: ">{population}</Item>
                </li>
                <li>
                    <Item label="Área: ">{area}</Item>
                </li>
                <li>
                    <Item label="Densidade: ">{demographcDensity}</Item>
                </li>

            </ul>
        </div>
    )
}
