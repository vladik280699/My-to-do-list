import React from 'react';
import './Footer.scss'

const SHOW_ALL = "SHOW_ALL";
const SHOW_ACTIVE = "SHOW_ACTIVE";
const SHOW_COMPLETED = "SHOW_COMPLETED";


const Footer = ({count, setVisibilityFilter}) => {

  const setFilterALL = () =>{
    setVisibilityFilter(SHOW_ALL);
  };
  const setFilterActive = () =>{
    setVisibilityFilter(SHOW_ACTIVE);
  };
  const setFilterCompleted = () =>{
    setVisibilityFilter(SHOW_COMPLETED);
  };  

  return(<div className="footer">
      <div className="footer__count">
        <span>Count: {count}</span>
      </div>
      <div className="filters">
        <button className="filters__btn filters__btn_first" onClick={setFilterALL}>All</button>
        <button className="filters__btn" onClick={setFilterActive}>Active</button>
        <button className="filters__btn filters__btn_last" onClick={setFilterCompleted}>Completed</button>
      </div>
    </div>);
};

export default Footer;