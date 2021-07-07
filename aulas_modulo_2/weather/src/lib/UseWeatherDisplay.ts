import { useAtom } from "jotai"
import { useQuery } from "react-query"
import { Weatherdata } from "../api/entities/EntityDefinition"
import { weatherQuery } from "../api/queries"
import { checkedCityAtom } from "../global"

const useWeatherDisplay = () => {
  const [cityChecked] = useAtom(checkedCityAtom)

  const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityChecked}&units=metric&lang=pt_br&&appid=33c8b203ea568c451dfd0b152d293096`

  const { isFetching, data } = useQuery<Weatherdata>(
    weatherQuery(cityChecked as number),
    () => fetch(url).then((response) => response.json())
  )

  return { isFetching, data }
}

export default useWeatherDisplay
