import React from 'react';
import styles from './Kitchen.scss';
import { Scheduler, Appointments, WeekView } from '@devexpress/dx-react-scheduler-material-ui';
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { appointments } from "./data";

const theme = createMuiTheme({ palette: { type: "light", primary: blue, spacing: 4, } });


class Kitchen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments
    };
  }
  render() {
    const { data } = this.state;

    return (
      <div className={styles.component}>
        <h2>View</h2>
        <MuiThemeProvider theme={theme}>
          <Paper>
            <Scheduler data={data}>
              <ViewState currentDate="2018-06-28" />
              <WeekView startDayHour={9} endDayHour={19} />
              <Appointments />
            </Scheduler>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

Kitchen.propTypes = {

};

export default Kitchen;
