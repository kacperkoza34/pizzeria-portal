import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    cursor: 'pointer',
  },
}));

const options = [
  {
    id: 'home',
    names: [
      { name: 'Home', link: '/'},
    ],
  },
  {
    id: 'tables',
    names: [
      { name: 'Tables', link: '/tables'},
      { name: 'Booked tables', link: '/tables/booking/:id'},
      { name: 'Book new table', link: '/tables/booking/new'},
      { name: 'Events', link: '/tables/events/:id'},
      { name: 'Add event', link: '/tables/events/new'},
    ],
  },
  {
    id: 'waiter',
    names: [
      { name: 'Waiter', link: '/waiter' },
      { name: 'Add new order', link: '/waiter/order/new' },
      { name: 'See new orders', link: '/waiter/order/:id' },
    ],
  },
  {
    id: 'kitchen',
    names: [
      { name: 'Kitchen', link: '/kitchen'},
    ],
  },
  {
    id: 'login',
    names: [
      { name: 'Login', link: '/login'},
    ],
  },
];

const PageNav = props => {
  const classes = useStyles();
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
    <div className={styles.root}>
      <nav className={classes.nav} >
        {options.map( ({id, names})  =>(
          <div key={id}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                onClick={event => handleClickListItem(event, names[0].name)}
              >
                <ListItemText primary={
                  names.length === 1 ?
                    <NavLink
                      className={styles.link}
                      to={process.env.PUBLIC_URL+names[0].link}
                      activeClassName='active'>{names[0].name}</NavLink>
                    :names[0].name
                } />
              </ListItem>
            </List>
            {currentMenu !== names[0].name || names.length === 1 ? '' : <Menu
              id={id}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              aria-expanded="true"

            >
              {names.map((name) => (
                <MenuItem
                  key={name.name}
                  onClick={event => handleMenuItemClick(event)}
                >
                  <NavLink
                    className={styles.link}
                    to={process.env.PUBLIC_URL+name.link}
                    activeClassName='active'>{name.name}
                  </NavLink>
                </MenuItem>
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
