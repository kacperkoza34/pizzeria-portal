import { connect } from 'react-redux';
import WaiterNewOrder from './WaiterNewOrder';
import { getAll, getLoadingState } from '../../../redux/reducers/productsReducer';
import { getProducts } from '../../../redux/actions/getProducts';

const mapStateToProps = (state) => ({
  products: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterNewOrder);
