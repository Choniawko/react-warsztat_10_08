import { Task } from './containers/Task';

export const findById = (tasks: Task[], id: number) => tasks.find((task) => task.id === id);

export const toggleTask = () => null;
export const addTask = () => null;
export const removeTask = () => null;
export const updateTask = () => null;
