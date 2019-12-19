import React from 'react';
import './TaskCreator.scss';

class TaskCreator extends React.Component {
  state = {
    textTask: ""
  }
  typeText(e){
      this.setState({
        textTask: e.currentTarget.value
      })

  }
  handleCreateTask(e){
    e.preventDefault();
    if(this.state.textTask){
      const id = new Date().getTime();
      const text = this.state.textTask;
      this.props.createTask(id, text);
      this.setState({
        textTask: ""
      })
    }
    
  }

    render() {
        return (
            <form className="form">
                <input className="form__input" placeholder="add a new task" value={this.state.textTask} onChange={this.typeText.bind(this)}/>
                <button className="form__button" type="submit" onClick={this.handleCreateTask.bind(this)}>add</button>
            </form>
        );
    }
};

export default TaskCreator;