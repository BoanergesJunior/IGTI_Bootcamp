import TableScreen from './pages/TableScreen'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { getToday } from './helpers/dateFunction';

function App() {

  const date = getToday()

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/despesas">
            <TableScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
