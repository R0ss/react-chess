
import React from "react";
import ReactDom from "react-dom";
import {HashRouter, Switch, Route} from "react-router-dom";
import Layout from "./components/Layout";
import GameRoom from "./pages/GameRoom";
import Lobby from "./pages/Lobby";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";


const app = document.getElementById('app');
ReactDom.render(
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/play" render={(props) => (<GameRoom test="weee" {...props} />)}></Route>
        <Route path="/lobby" component={Lobby}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </Layout>
  </HashRouter>
  ,app);
