import * as React from 'react';

interface TaskFormProps {
    currentTask: string;
    handleInput: (e: any) => void;
    handleSubmit: (e: any) => void;

}

const TaskForm = (props: TaskFormProps) => {
    const { currentTask, handleInput, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} value={currentTask} />
        </form>
    );
        
};

export default TaskForm;