import React from 'react';

class MainLayout extends React.Component {

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {

};

export default MainLayout;
