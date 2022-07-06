import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Listings from "./Components/Listings";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Listing from "./Pages/Listing";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Router>
        <Header search={search} setSearch={setSearch} />
        <Switch>
          <Route exact path="/">
            <Listings search={search} />
          </Route>
          <Route path="/listing/:id">
            <Listing setSearch={setSearch} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
