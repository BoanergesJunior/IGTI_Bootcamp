export interface CityEntity {
  id: number
  name: string
  state: string
  country: string
  coord: {
    lon: number
    lat: number
  }
}

export interface Weatherdata {
  name: string
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
}
