import React from 'react';
import {createTask} from '../../store/action-creators';
import { connect } from 'react-redux';
import TaskCreator from './TaskCreator';


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (id, text) => {
      dispatch(createTask(id, text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);