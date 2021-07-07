import { useAtom } from "jotai"
import styled from "styled-components"
import { InputSearch } from "../atoms/InputSearch.component"
import { citiesAtom } from "../global"

import CityList from "./CityList.component"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding-top: 5rem;
`

export const CitySearch = () => {
  const [cities] = useAtom(citiesAtom)

  return (
    <Container>
      <InputSearch found={cities.length > 0} />
      <CityList />
    </Container>
  )
}
