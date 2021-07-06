import { useAtom } from "jotai"
import { useQuery } from "react-query"
import { citiesQuery, fetchCities } from "../api"
import { CityEntity } from "../api/entities/EntityDefinition"
import { citiesAtom } from "../global"

const useSearch = () => {
  const [cities, setCities] = useAtom(citiesAtom)

  const { isFetching, data, error } = useQuery<CityEntity[]>(
    citiesQuery(),
    () => fetchCities()
  )

  const filterCities = (name: string) => {
    if (name.length <= 3) {
      setCities([])
      return
    }
    const list = data
      ? data.filter(
          (item) =>
            item.name.toLocaleUpperCase().indexOf(name.toUpperCase()) >= 0
        )
      : []
    setCities(list)
  }

  return { isFetching, data, error, filterCities, cities }
}

export default useSearch
