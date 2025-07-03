import { Routes, Route } from 'react-router-dom';
import NavbarLayout from '../layouts/NavbarLayout';

import HomePage from '../pages/home/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
