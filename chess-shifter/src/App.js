import React from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import HomeComponent from "./components/HomeComponent";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/"><Redirect to="/en" /></Route>
      
      <Route exact path="/:lang" component={HomeComponent} />
      
      {/*<Route exact path="/:lang/play/classic" component={ClassicPlayComponent} />
      <Route exact path="/:lang/rules/classic" component={ClassicRulesComponent} />*/}
        
      {/*<Route exact path="/:lang/play/mini" component={MiniPlayComponent} />
      <Route exact path="/:lang/rules/mini" component={MiniRulesComponent} />*/}
      
      {/*<Route exact path="/:lang/play/fischer" component={FischerPlayComponent} />
      <Route exact path="/:lang/rules/fischer" component={FischerRulesComponent} />*/}
      
      {/*<Route exact path="/:lang/play/atomic" component={AtomicPlayComponent} />
      <Route exact path="/:lang/rules/atomic" component={AtomicRulesComponent} />*/}
      
      {/*<Route exact path="/:lang/play/alice" component={AlicePlayComponent} />
      <Route exact path="/:lang/rules/alice" component={AliceRulesComponent} />*/}
      
      {/*<Route exact path="/:lang/play/threecheck" component={ThreecheckPlayComponent} />
      <Route exact path="/:lang/rules/threecheck" component={ThreecheckRulesComponent} />*/}
      
      {/*<Route exact path="/:lang/play/duck" component={DuckPlayComponent} />
      <Route exact path="/:lang/rules/duck" component={DuckRulesComponent} />*/}
      
      {/*<Route exact path="/:lang/play/terminal" component={TerminalPlayComponent} />*/}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
