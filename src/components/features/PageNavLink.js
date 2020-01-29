import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const PageNavLink = ( props ) => {
  const { index, menuProps, children} = props;
  return(
    <div>
      <NavLink
        to={process.env.PUBLIC_URL+menuProps[index].link}
        activeClassName='active'>{children}</NavLink>
    </div>
  );
};

PageNavLink.propTypes = {
  index: PropTypes.number,
  menuProps: PropTypes.array,
  children: PropTypes.node,
};

export default PageNavLink;
