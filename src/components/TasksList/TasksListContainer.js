import React from 'react';
import TasksList from './TasksList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    visibilityFilter: state.visibilityFilter
  };
};


export default connect(mapStateToProps)(TasksList);