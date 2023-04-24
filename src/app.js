// src/app.js

import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Overlay from './components/Overlay/Overlay';
import LoginModal from './components/LoginModal/LoginModal';
import Home from './pages/Home';
import CafeDetail from './pages/CafeDetail';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      {/* <Router> */}
      <Header />
      {/* <Switch> */}
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/cafedetail" component={CafeDetail} /> */}
      <Home />
      {/* <Route path="/error404" component={Error404} /> */}
      {/* </Switch> */}
      <Footer />
      {/* <Overlay /> */}
      {/* <LoginModal /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
