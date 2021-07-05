import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Translate from "./Components/Translate/Translate";
import Search from "./Components/Search/Search";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/translate" component={Translate} />
        <Route exact path="/search" component={Search} />
        <Redirect to="/translate" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
