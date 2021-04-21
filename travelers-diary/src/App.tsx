import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router >
      <Switch>
        <Redirect exact from='/' to='/main' />
        <Route path='/main' component={MainPage}/>
        <Route path='/news' />
        <Route path='/lk' />
        <Route path='/about' />
      </Switch>
    </Router>
  );
}

export default App;
