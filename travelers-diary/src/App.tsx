import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router >
      <Switch>
        <Redirect exact from='/' to='/main' />
        <Route path='/main' />
        <Route path='/news' />
        <Route path='/lk' />
        <Route path='/about' />
      </Switch>
    </Router>
  );
}

export default App;
