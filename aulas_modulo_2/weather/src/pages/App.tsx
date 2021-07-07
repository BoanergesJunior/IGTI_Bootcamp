import "../styles/colors.style.css"
import WeatherDisplay from "../atoms/WeatherDisplay"
import styled, { ThemeProvider } from "styled-components"
import ThemeSwitch from "../atoms/ThemeSwitch.component."

import { useAtom } from "jotai"
import { themeAtom } from "../global"
import { DarkTheme, LightTheme } from "../themes"
import { QueryClient, QueryClientProvider } from "react-query"
import { CitySearch } from "../molecules/CitySearch.component"

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
`

const AppContainer = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
`

const ContainerWeatherDisplay = styled.div`
  width: 30%;
  margin-right: auto;
  margin-left: auto;
`

function App() {
  const queryClient = new QueryClient()
  const [theme] = useAtom(themeAtom)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
        <AppContainer>
          <Container>
            <ThemeSwitch />
            <CitySearch />
            <ContainerWeatherDisplay>
              <WeatherDisplay />
            </ContainerWeatherDisplay>
          </Container>
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
