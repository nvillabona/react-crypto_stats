import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AppBar from './components/Layout/AppBar/AppBar';
//Screens
import Home from './screens/Home/Home';
import CoinDetail from './screens/Coin/CoinDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <AppBar />
          <Outlet />
        </>}>
          <Route index element={<Home />} />
          <Route path="currency" element={<><Outlet/></>}>
            <Route path=":id" element={<CoinDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
