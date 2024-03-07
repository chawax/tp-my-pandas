import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundView from '../views/NotFoundView';
import PandaDetailsView from '../views/PandaDetailsView';
import PandasListView from '../views/PandasListView';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PandasListView />} />
          <Route path="pandas" element={<PandasListView />} />
          <Route path="pandas/:id" element={<PandaDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
