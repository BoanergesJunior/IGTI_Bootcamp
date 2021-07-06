import { useAtom } from "jotai"
import { checkedCityAtom, citiesAtom } from "../global"
import CityTag from "../atoms/CityTag.component"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const CityList = () => {
  const [cities] = useAtom(citiesAtom)
  const [checkedCity, setCheckedCity] = useAtom(checkedCityAtom)

  const onClick = (id: number) => {
    setCheckedCity(id)
  }

  return (
    <Container>
      {cities.map((city) => (
        <CityTag
          name={city.name}
          onClick={() => onClick(city.id)}
          checked={checkedCity === city.id}
        />
      ))}
    </Container>
  )
}

export default CityList
