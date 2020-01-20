import { connect } from 'react-redux';
import WaiterView from './WaiterView';
import { getAll, fetchFromAPI, getLoadingState, postToAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  postStatus: (row) => dispatch(postToAPI(row)),

});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterView);
