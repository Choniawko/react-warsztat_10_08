import * as React from 'react';
import { Task } from '../../containers/Task';
import TaskItem from '../TaskItem/TaskItem';

interface TaskListProps {
    tasks: Task[];
    handleChange: (id: number) => void; 
}

const TaskList = (props: TaskListProps) => {
    const { tasks, handleChange } = props;
    return (
        <ul>
                {tasks.map((task: Task) => (
                    <TaskItem key={task.id} task={task} handleChange={handleChange}  />
                    
                ))}
            </ul>
    );
};

export default TaskList;
