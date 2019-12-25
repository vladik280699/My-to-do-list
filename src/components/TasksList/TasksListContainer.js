import TasksList from './TasksList';
import { connect } from 'react-redux';
import { getFilteredTasks } from '../../store/selectors';

const mapStateToProps = (state) => {
  return {
    filteredTasks: getFilteredTasks(state)
  };
};


export default connect(mapStateToProps)(TasksList);