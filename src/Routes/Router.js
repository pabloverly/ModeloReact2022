

import React from 'react';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
// Paginas
import Home from "../Pages/Home/Index";
import Contato from "../Pages/Contato/Index";
import Header from '../Components/Header/Index'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="Home" element={<Home />}>
          {/* <Route path="me" element={<Contato />} /> */}
          {/* <Route path=":id" element={<UserProfile />} /> */}
        </Route>
        <Route path="/Contato" element={<Contato />} />

      </Routes>
    </BrowserRouter>
  );
}
export default Router;