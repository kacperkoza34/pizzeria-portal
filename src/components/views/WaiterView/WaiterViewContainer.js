import { connect } from 'react-redux';
import WaiterView from './WaiterView';
import { getAll, getLoadingState } from '../../../redux/reducers/tablesReducer';
import { getTables, changeStatus} from '../../../redux/actions/getTables';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(getTables()),
  postStatus: (row) => dispatch(changeStatus(row)),

});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterView);
