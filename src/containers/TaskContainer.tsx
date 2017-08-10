import * as React from 'react';
import { Task } from './Task';

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
                            onChange={() => null}
                    />
                    </span></li>
                    
                ))}
            </ul>
        </div>
    );
  }
}

export default TaskContainer;