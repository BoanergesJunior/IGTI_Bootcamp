import { CitySearch } from "../molecules/CitySearch.component"
import "../styles/colors.style.css"
import { QueryClient, QueryClientProvider } from "react-query"

function App() {
  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <CitySearch />
      </QueryClientProvider>
    </div>
  )
}

export default App
