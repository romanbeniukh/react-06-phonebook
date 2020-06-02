import { connect } from 'react-redux';
import { GET_ALL_NOTIFICATION } from '../selectors/NotificationSelector';
import CustomAlert from '../../components/Alert/CustomAlert';
import { CLOSE_NOTIFICATION_ACTION } from '../actions/NotificationActions';

const mapStateToProps = state => ({
  notification: GET_ALL_NOTIFICATION(state),
});

const mapDispatchToProps = dispatch => ({
  closeNotification: () => dispatch(CLOSE_NOTIFICATION_ACTION()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomAlert);
