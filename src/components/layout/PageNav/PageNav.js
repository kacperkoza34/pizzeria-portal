import React from 'react';
import styles from './PageNav.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import pageNavData from '../../../data/pageNavData.js';
import PageNavLink from '../../features/PageNavLink.js';

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
                    <PageNavLink
                      index={0}
                      menuProps={menuProps}
                      activeClassName='active'>
                      {menuProps[0].name}
                    </PageNavLink>
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
              {menuProps.map(({name, link}, index) => (
                <PageNavLink
                  key={name}
                  index={index}
                  menuProps={menuProps}
                  activeClassName='active' >
                  <MenuItem
                    key={name}
                    onClick={event => handleMenuItemClick(event)}
                  >
                    {name}
                  </MenuItem>
                </PageNavLink>
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
