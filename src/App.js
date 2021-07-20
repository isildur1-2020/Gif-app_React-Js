import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Translate from "./Components/Translate/Translate";
import Search from "./Components/Search/Search";

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/translate" component={Translate} />
        <Route exact path="/search" component={Search} />
        <Redirect to="/search" />
      </Switch>
    </Layout>
  </HashRouter>
);
export default App;
