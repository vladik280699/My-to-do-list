import {deleteTask, toggleStatusTask} from '../../store/action-creators';
import { connect } from 'react-redux';
import Task from './Task';



export default connect(null,{deleteTask, toggleStatusTask})(Task);