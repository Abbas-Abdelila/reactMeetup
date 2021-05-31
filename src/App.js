import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Layout from "./Components/layout/Layout";
import AllMeetups from "./Pages/AllMeetups";
import Favorites from "./Pages/Favorites";
import NewMeetup from "./Pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/Favorites">
          <Favorites />
        </Route>
        <Route path="/NewMeetups">
          <NewMeetup />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
