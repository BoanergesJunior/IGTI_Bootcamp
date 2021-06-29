import TableScreen from "./pages/TableScreen"
import LoginScreen from "./components/LoginScreen"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
// import { getToday } from "./helpers/dateFunction"
import { getUserEndpoint } from "./services/users/apiUsers"
import { useState, useEffect } from "react"
import { authContext } from "./components/authcontext"

function App() {
  // const date = getToday()

  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserEndpoint().then(setUser, () => onSignOut)
  }, [])

  function onSignOut() {
    setUser(null)
  }

  if (user) {
    return (
      <div>
        <authContext.Provider value={{ user, onSignOut }}>
          <Router>
            <Switch>
              <Route path="/despesas">
                <TableScreen />
              </Route>
              <Redirect to={{ pathname: "/despesas" }} />
            </Switch>
          </Router>
        </authContext.Provider>
      </div>
    )
  } else {
    return <LoginScreen onSignIn={setUser} />
  }
}

export default App
