import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundView from '../../views/NotFoundView';
import PandaDetailsView from '../../views/PandaDetailsView';
import PandasListView from '../../views/PandasListView';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PandasListView} />
        <Route path="/pandas" exact component={PandasListView} />
        <Route path="/pandas/:id" component={PandaDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
