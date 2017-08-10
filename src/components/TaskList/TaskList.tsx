import * as React from 'react';
import { Task } from '../../containers/Task';
import TaskItem from '../TaskItem/TaskItem';
import { style } from 'typestyle';

interface TaskListProps {
    tasks: Task[];
    handleChange: (id: number) => void; 
}

const listDecorator = style({
    listStyleType: 'none'
});

const TaskList = (props: TaskListProps) => {
    const { tasks, handleChange } = props;
    return (
        <ul className={listDecorator}>
                {tasks.map((task: Task) => (
                    <TaskItem key={task.id} task={task} handleChange={handleChange}  />
                    
                ))}
            </ul>
    );
};

export default TaskList;
