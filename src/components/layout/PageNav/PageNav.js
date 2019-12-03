import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './PageNav.scss';


const PageNav = props => (
  <nav className={styles.component}>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Booked Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Booked Table</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Table Events</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Table Event</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter View</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>Waiter New Order</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>Waiter All Orders</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
  </nav>
);

export default PageNav;
