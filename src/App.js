import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesNewBooking from './components/views/TablesNewBooking/TablesNewBooking';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import TablesNewEvents from './components/views/TablesNewEvents/TablesNewEvents';
import WaiterAllOrders from './components/views/WaiterAllOrders/WaiterAllOrders';
import WaiterNewOrder from './components/views/WaiterNewOrder/WaiterNewOrder';
import WaiterView from './components/views/WaiterView/WaiterView';
import PageNav from './components/layout/PageNav/PageNav';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <PageNav />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesNewBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvents} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesNewEvents} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={WaiterView} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterNewOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterAllOrders} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
