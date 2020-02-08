import { connect } from 'react-redux';
import WaiterView from './WaiterView';
import { getAll } from '../../../redux/reducers/tablesReducer';
import { getTablesState } from '../../../redux/reducers/statusReducer';
import { getTables, changeStatus} from '../../../redux/actions/getTables';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getTablesState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(getTables()),
  postStatus: (row) => dispatch(changeStatus(row)),

});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterView);
