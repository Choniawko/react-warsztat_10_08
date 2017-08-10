import * as React from 'react';
import { Task } from './Task';
import { findById, toggleTask, updateTasks } from '../Helpers';

interface TaskContainerState {
    tasks: Task[];
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
            ]
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

  render() {
    return (
        <div>
            <input type="text" />
            <ul>
                {this.state.tasks.map((task: Task) => (
                    <li key={task.id}>{task.name}
                    <span><input 
                            type="checkbox" 
                            checked={task.done} 
                            onChange={() => this.handleChange(task.id)}
                    />
                    </span></li>
                    
                ))}
            </ul>
        </div>
    );
  }
}

export default TaskContainer;