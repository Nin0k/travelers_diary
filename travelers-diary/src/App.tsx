import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";

function App() {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/main" />
                <Route path="/main" component={MainPage} />
                <Route path="/news" component={NewsPage}/>
                <Route path="/lk" />
                <Route path="/about" />
            </Switch>
        </Router>
    );
}

export default App;
