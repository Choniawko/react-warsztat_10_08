import * as React from 'react';
import { Task } from './Task';
import { findById, toggleTask, updateTasks } from '../Helpers';
import TaskList from '../components/TaskList/TaskList';
import TaskForm from '../components/TaskForm/TaskForm';

interface TaskContainerState {
    tasks: Task[];
    currentTask: string;
}

class TaskContainer extends React.Component<{}, TaskContainerState> {

    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    id: 1,
                    name: 'Task #1',
                    done: true
                },
                {
                    id: 2,
                    name: 'Task #2',
                    done: false
                },
                {
                    id: 3,
                    name: 'Task #3',
                    done: false
                },
            ],
            currentTask: ''
        };
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

  render() {
    return (
        <div>
            <TaskForm currentTask={this.state.currentTask} handleInput={this.handleInput} />
            <TaskList tasks={this.state.tasks} handleChange={this.handleChange} />
        </div>
    );
  }
}

export default TaskContainer;