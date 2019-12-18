import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskCreatorContainer from './components/TaskCreator/TaskCreatorContainer';
import TasksContainer from './components/Tasks/TasksListContainer';

const App = () => {

    return (
        <div>
            <Header/>
            <TaskCreatorContainer/>
            <TasksContainer/>
            <Footer/>
        </div>
    );
};

export default App;