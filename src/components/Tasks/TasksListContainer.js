import React from 'react';
import Tasks from './TasksList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};


export default connect(mapStateToProps)(Tasks);