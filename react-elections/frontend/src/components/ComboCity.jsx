export default function ComboCity({
    arrayOfAllCities = [],
    onSelectedCity = ''
}) {
    
    function handleSelectedCity(e) {
        if(onSelectedCity)
            onSelectedCity(e.target.value)
    }

    return (
        <div className="flex flex-col items-center m-5">
            <span className="p-2 font-mono">Escolha o município</span>

            <select className="bg-gray-50 shadow-lg rounded-lg font-mono" name="cities" id="citySelectId"
                onChange={handleSelectedCity}>

                {arrayOfAllCities.map(city => {
                    return <option key={city.id} value={city.name}>
                        {city.name}
                    </option>
                })}
            </select>
        </div>
    )
}
