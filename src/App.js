import React from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import Footer from './components/Footer';

const App = () => {

    return (
        <div>
            <Header/>
            <TaskCreator/>
            <Tasks/>
            <Footer/>
        </div>
    );
};

export default App;