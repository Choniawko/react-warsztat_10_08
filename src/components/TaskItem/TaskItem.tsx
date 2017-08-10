import * as React from 'react';
import { Task } from '../../containers/Task';
import { style } from 'typestyle';

interface TaskItemProps {
    task: Task;
    handleChange: (id: number) => void; 
}

const textDecorator = (task: Task) => style({
    textDecoration: task.done ? 'line-through' : 'none'
});

const TaskItem = (props: TaskItemProps) => {
    const { task, handleChange } = props;
    return (
        <li className={textDecorator(task)} key={task.id}>{task.name}
                    <span><input 
                            type="checkbox" 
                            checked={task.done} 
                            onChange={() => handleChange(task.id)}
                    />
                    </span></li>
                    
                );
};

export default TaskItem;
