import { connect } from 'react-redux';
import WaiterNewOrder from './WaiterNewOrder';
import { getAll } from '../../../redux/reducers/productsReducer';
import { getProductsState } from '../../../redux/reducers/statusReducer';
import { getProducts } from '../../../redux/actions/getProducts';

const mapStateToProps = (state) => ({
  products: getAll(state),
  loading: getProductsState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterNewOrder);
