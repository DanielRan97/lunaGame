import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from '../component/main/homePage/homePage';
import SingUp from '../component/main/log/singUp';


const MainRouter = () => {
  return (

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/log" element={<SingUp />} />
    </Routes>

  );
};

export default MainRouter;