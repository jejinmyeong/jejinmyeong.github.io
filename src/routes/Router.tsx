import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;