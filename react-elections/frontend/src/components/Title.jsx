import _ from 'lodash'

export default function Title({
    children: description = 'Descrição eleições',
    arrayOfAllCities = [],
    comboSelectedCity = ''
}) {
    let status = arrayOfAllCities.length == 0 ? 'vazio' : arrayOfAllCities 
    console.log(status)

    let info = _.find(arrayOfAllCities, {name: comboSelectedCity})

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <span className="font-mono font-semibold text-lg">
                    {description}
                </span>
            </div>

            <div className="flex flex-row font-mono font-semibold items-center space-x-4 m-2">
                {/* <span>Total Eleitores: {info.votingPopulation.toLocaleString()}</span>
                <span>Abstenção: {info.absence.toLocaleString()}</span>
                <span>Comparecimento: {info.presence.toLocaleString()}</span> */}
            </div>

            <div className="text-center font-mono text-sm m-3">
                <span>Canditados</span>
            </div>
        </div>
    )
}
