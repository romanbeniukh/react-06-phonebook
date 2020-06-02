import { connect } from 'react-redux';
import { GET_FILTER_VALUE } from '../selectors/ContactsSelector';
import { FILTER_CONTACT_ACTION } from '../actions/ContactFilterActions';
import ContactFilter from '../../components/ContactFilter/ContactFilter';

const mapStateToProps = state => ({
  value: GET_FILTER_VALUE(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: name => dispatch(FILTER_CONTACT_ACTION(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
