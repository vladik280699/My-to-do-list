import React from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import {setVisibilityFilter} from '../../store/action-creators';
import { getCountTasks } from '../../store/selectors';


const mapStateToProps = (state) => {
  return {
    count: getCountTasks(state)
  };
};

export default connect(mapStateToProps, {setVisibilityFilter})(Footer);