import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';

const PageNav = props => {

  return(<nav>
    <Button component={NavLink} className={styles.link} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home   jjjj</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Booked Tables</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Booked Table</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Table Events</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Table Event</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter View</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>Waiter New Order</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>Waiter All Orders</Button>
    <Button component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
  </nav>);
};

export default PageNav;
