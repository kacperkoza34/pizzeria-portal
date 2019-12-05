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
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffeaa7' },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={'/panel'}>
          <MainLayout>
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
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
