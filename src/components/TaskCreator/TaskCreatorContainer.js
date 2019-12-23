import {createTask} from '../../store/action-creators';
import { connect } from 'react-redux';
import TaskCreator from './TaskCreator';


export default connect(null, {createTask})(TaskCreator);