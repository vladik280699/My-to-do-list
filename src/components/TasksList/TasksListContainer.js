import TasksList from './TasksList';
import { connect } from 'react-redux';
import { getTasks, getVisibilityFilter } from '../../store/selectors';

const mapStateToProps = (state) => {
  return {
    tasks: getTasks(state),
    visibilityFilter: getVisibilityFilter(state)
  };
};


export default connect(mapStateToProps)(TasksList);