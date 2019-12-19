import React from 'react';
import Header from './components/Header';
import TaskCreatorContainer from './components/TaskCreator/TaskCreatorContainer';
import TasksListContainer from './components/TasksList/TasksListContainer';
import FooterContainer from './components/Footer/FooterContainer';
import "./App.scss";

const App = () => {

    return (
        <div className="app-wrapper">
            <div className="app">
                <Header/>
                <TaskCreatorContainer/>
                <TasksListContainer/>
                <FooterContainer/>
            </div>
        </div>
    );
};

export default App;