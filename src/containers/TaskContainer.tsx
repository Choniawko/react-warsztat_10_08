import * as React from 'react';
import { Task } from './Task';
import { findById, toggleTask, updateTasks, addTask } from '../Helpers';
import TaskList from '../components/TaskList/TaskList';
import TaskForm from '../components/TaskForm/TaskForm';
import { getTasks } from './appService';

interface TaskContainerState {
    tasks: Task[];
    currentTask: string;
}

class TaskContainer extends React.Component<{}, TaskContainerState> {

    constructor() {
        super();
        this.state = {
            tasks: [ ],
            currentTask: ''
        };
    }

    componentDidMount() {
        getTasks()
            .then((tasks: Task[]) => {
                this.setState({
                    tasks: tasks
                });
            });
    }

  handleChange = (id: number) => {
    // tslint:disable-next-line:no-any
    const task: any = findById(this.state.tasks, id);
    const toggledTask: Task = toggleTask(task);
    const updatedTasks = updateTasks(this.state.tasks, toggledTask);
    this.setState({
        tasks: updatedTasks
    });
  }

  // tslint:disable-next-line:no-any
  handleInput = (e: any) => {
    this.setState({
        currentTask: e.target.value
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState({
        tasks: addTask(this.state.currentTask, this.state.tasks)
    });
    this.setState({
        currentTask: ''
    });
  }

  render() {
    return (
        <div>
            <TaskForm 
                currentTask={this.state.currentTask} 
                handleInput={this.handleInput} 
                handleSubmit={this.handleSubmit} 
            />
            <TaskList tasks={this.state.tasks} handleChange={this.handleChange} />
        </div>
    );
  }
}

export default TaskContainer;