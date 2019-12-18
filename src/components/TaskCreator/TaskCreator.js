import React from 'react';

class TaskCreator extends React.Component {
  state = {
    textTask: ""
  }
  typeText(e){
      this.setState({
        textTask: e.currentTarget.value
      })

  }
  handleCreateTask(){

    const id = new Date().getTime();
    const text = this.state.textTask;
    this.props.createTask(id, text);
    this.setState({
      textTask: ""
    })
    
  }

    render() {
        return (
            <div>
                <input placeholder="task" value={this.state.textTask} onChange={this.typeText.bind(this)}/>
                <button onClick={this.handleCreateTask.bind(this)}>add</button>
            </div>
        );
    }
};

export default TaskCreator;