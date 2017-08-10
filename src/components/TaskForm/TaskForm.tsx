import * as React from 'react';

interface TaskFormProps {
    currentTask: string;
    handleInput: (e: any) => void;
}

const TaskForm = (props: TaskFormProps) => {
    const { currentTask, handleInput } = props;
    return (
        <form>
            <input type="text" onChange={handleInput} value={currentTask} />
        </form>
    );
        
};

export default TaskForm;