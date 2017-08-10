import * as React from 'react';
import { Task } from '../../containers/Task';

interface TaskItemProps {
    task: Task;
    handleChange: (id: number) => void; 
}

const TaskItem = (props: TaskItemProps) => {
    const { task, handleChange } = props;
    return (
        <li key={task.id}>{task.name}
                    <span><input 
                            type="checkbox" 
                            checked={task.done} 
                            onChange={() => handleChange(task.id)}
                    />
                    </span></li>
                    
                );
};

export default TaskItem;
