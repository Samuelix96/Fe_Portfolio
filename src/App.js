/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import MyWorks from './pages/MyWorks';
import ContactMe from './pages/ContactMe';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          path='/skills'
          element={<Skills />}
        />
        <Route
          path='/myworks'
          element={<MyWorks />}
        />
        <Route
          path='/contactme'
          element={<ContactMe />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
