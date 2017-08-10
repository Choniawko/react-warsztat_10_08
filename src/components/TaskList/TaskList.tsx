import * as React from 'react';
import { Task } from '../../containers/Task';

interface TaskListProps {
    tasks: Task[];
    handleChange: (id: number) => void; 
}

const TaskList = (props: TaskListProps) => {
    const { tasks, handleChange } = props;
    return (
        <ul>
                {tasks.map((task: Task) => (
                    <li key={task.id}>{task.name}
                    <span><input 
                            type="checkbox" 
                            checked={task.done} 
                            onChange={() => handleChange(task.id)}
                    />
                    </span></li>
                    
                ))}
            </ul>
    );
};

export default TaskList;
