import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
          
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
