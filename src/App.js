import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Gift from "./screen/gift";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/puzzle">
            <Gift/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
