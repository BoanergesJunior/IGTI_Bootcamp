import styled from "styled-components"
import { InputSearch } from "../atoms/InputSearch.component"

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
  return (
    <Container>
      <InputSearch found />
    </Container>
  )
}
