import React from 'react';
import './App.css';
import {Main} from './pages'
import './assets/stylesheets/total.css';
import Greeting from "./components/Greeting";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import SigninTest from "./components/SigninTest";
import HideTest from "./components/HideTest";

const App = () => {
  return (
      <>
      <Main/>
        <Greeting/>
        <SigninTest/>
        <HideTest/>
      </>)
}

export default App;
