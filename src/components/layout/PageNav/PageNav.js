import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const menu = [
  {
    id: 'home',
    menuProps: [
      { name: 'Home', link: '/'},
    ],
  },
  {
    id: 'tables',
    menuProps: [
      { name: 'Tables', link: '/tables'},
      { name: 'Booked tables', link: '/tables/booking/:id'},
      { name: 'Book new table', link: '/tables/booking/new'},
      { name: 'Events', link: '/tables/events/:id'},
      { name: 'Add event', link: '/tables/events/new'},
    ],
  },
  {
    id: 'waiter',
    menuProps: [
      { name: 'Waiter', link: '/waiter' },
      { name: 'Add new order', link: '/waiter/order/new' },
      { name: 'See new orders', link: '/waiter/order/:id' },
    ],
  },
  {
    id: 'kitchen',
    menuProps: [
      { name: 'Kitchen', link: '/kitchen'},
    ],
  },
  {
    id: 'login',
    menuProps: [
      { name: 'Login', link: '/login'},
    ],
  },
];

const PageNav = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentMenu, setCurrentMenu] = React.useState(null);

  const handleClickListItem = (event, currentElement) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(currentElement);
  };
  const handleMenuItemClick = (event) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div className={styles.component}>
      <nav className={styles.nav} >
        {menu.map( ({id, menuProps})  =>(
          <div key={id}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                onClick={event => handleClickListItem(event, menuProps[0].name)}
              >
                <ListItemText primary={
                  menuProps.length === 1 ?
                    <NavLink
                      className={styles.link}
                      to={process.env.PUBLIC_URL+menuProps[0].link}
                      activeClassName='active'>{menuProps[0].name}</NavLink>
                    :menuProps[0].name
                } />
              </ListItem>
            </List>
            {currentMenu !== menuProps[0].name || menuProps.length === 1 ? '' : <Menu
              id={id}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              aria-expanded="true"
            >
              {menuProps.map(({name, link}) => (
                <NavLink
                  key={name}
                  className={styles.link}
                  to={process.env.PUBLIC_URL+link}
                  activeClassName='active'>
                  <MenuItem
                    key={name}
                    onClick={event => handleMenuItemClick(event)}
                  >
                    {name}
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>}
          </div>

        )
        )
        }

      </nav>
    </div>
  );
};

export default PageNav;
