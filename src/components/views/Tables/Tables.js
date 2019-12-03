import React from 'react';
import styles from './Tables.scss'

class Tables extends React.Component {

  render(){
    return(
      <div>
        <h2 className={styles.component}>
        - wybór daty i godziny
        - tabele z listą rezerwacji oraz wydarzeń
         - każda kalomna będzie jednym stolikiem
         - każdy wiersz będzie blokiem 30 minut
         - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sa różne stoliki
         - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
        </h2>
      </div>
    );
  }
}

Tables.propTypes = {

};

export default Tables;
