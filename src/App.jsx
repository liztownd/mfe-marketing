import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import PricingDetails from "./components/PricingDetails";

const App = ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
       <Router history={history}>
        <Switch>
          <Route exact path="/pricing" >
          <Pricing />
          </Route>
          <Route path="/pricing/:id">
          <PricingDetails />
          </Route>
          <Route path="/">
          <Landing />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
