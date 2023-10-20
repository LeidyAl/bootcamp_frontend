import { Routes, Route } from 'react-router-dom';

import Home from 'pages/home';
import NewBootcamp from 'pages/new-bootcamp';

const Router = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/new-bootcamp`} element={<NewBootcamp />} />
    </Routes>
  );
};

export default Router;
