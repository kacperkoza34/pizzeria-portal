import { connect } from 'react-redux';
import WaiterNewOrder from './WaiterNewOrder';
import { getAll, fetchFromAPI, getLoadingState } from '../../../redux/productsRedux';

const mapStateToProps = (state) => ({
  products: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterNewOrder);
