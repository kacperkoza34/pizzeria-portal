import React from 'react';
import styles from './Home.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
  render(){
    return(
      <div className={styles.component}>
        <h1>Welcome!</h1>
        <Paper className={styles.text}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It
          </p>
          <Button>Start!</Button>
        </Paper>
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;
