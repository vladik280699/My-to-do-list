import React from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import {setVisibilityFilter} from '../../store/action-creators';


const mapStateToProps = (state) => {
  let count = 0;
  if(state.visibilityFilter === "SHOW_ACTIVE"){
    count = state.tasks.filter(t => !t.completed).length;
  } else if(state.visibilityFilter === "SHOW_COMPLETED"){
    count = state.tasks.filter(t => t.completed).length;
  } else {
    count = state.tasks.length;
  }
  return {
    count: count
  };
};

export default connect(mapStateToProps, {setVisibilityFilter})(Footer);