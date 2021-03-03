import "./App.css";
import React, { useState } from "react";
import HomeContainer from "./containers/HomeContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import WeatherDetails from "./containers/WeatherDetails";

const copyright = "created by ameni ";
function App() {
  const [title, setTitle] = useState("");

  const handleonChange = (value) => {
    setTitle(value);
  };
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/weather/:city"} component={WeatherDetails} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
