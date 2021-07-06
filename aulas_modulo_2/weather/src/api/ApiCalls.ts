import cities from "./entities/city.json"

export const fetchCities = async () => {
  return JSON.parse(JSON.stringify(cities))
}
