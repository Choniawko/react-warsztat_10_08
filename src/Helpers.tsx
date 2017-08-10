import { Task } from './containers/Task';

export const findById = (tasks: Task[], id: number) => tasks.find((task) => task.id === id);

export const toggleTask = (task: Task) => ({ ...task, done: !task.done });

export const updateTasks = (tasks: Task[], task: Task) => {
    const taskIndex = tasks.findIndex((el) => task.id === el.id);
    return [
        ...tasks.slice(0, taskIndex),
        task,
        ...tasks.slice(taskIndex + 1)
    ];
};

export const addTask = (taskName: string, tasks: Task[]) => ([
        ...tasks,
        {
            id: tasks.length + 1,
            name: taskName,
            done: false
        }
    ]);
    
export const removeTask = () => null;
