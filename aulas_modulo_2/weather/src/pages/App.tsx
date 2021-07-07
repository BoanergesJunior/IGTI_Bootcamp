import { CitySearch } from "../molecules/CitySearch.component"
import "../styles/colors.style.css"
import { QueryClient, QueryClientProvider } from "react-query"
import WeatherDisplay from "../atoms/WeatherDisplay"
import styled from "styled-components"

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
`

const AppContainer = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`

const ContainerWeatherDisplay = styled.div`
  width: 30%;
  margin-right: auto;
  margin-left: auto;
`

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Container>
          <CitySearch />
          <ContainerWeatherDisplay>
            <WeatherDisplay />
          </ContainerWeatherDisplay>
        </Container>
      </AppContainer>
    </QueryClientProvider>
  )
}

export default App
