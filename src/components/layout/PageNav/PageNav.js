import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import pageNavData from '../../../data/pageNavData.js';

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
        {pageNavData.map( ({id, menuProps})  =>(
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
              className={styles.subMenu}
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
