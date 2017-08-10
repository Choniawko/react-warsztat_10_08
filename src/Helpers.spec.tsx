import { findById, toggleTask, updateTasks } from './Helpers';
import { Task } from './containers/Task';

test('Should find task by id', () => {
    const startedTasks = [
        {
            id: 1,
            name: 'Task #1',
            done: true
        },
        {
            id: 2,
            name: 'Task #2',
            done: false
        }
    ];

    const expected = {
            id: 2,
            name: 'Task #2',
            done: false
        };

    const result = findById(startedTasks, 2);
    expect(result).toEqual(expected);
});

test('Should change done property', () => {
    const startedTask = {
            id: 1,
            name: 'Task #1',
            done: true
        };

    const expected = {
            id: 1,
            name: 'Task #1',
            done: false
        };
    const result = toggleTask(startedTask);
    expect(result).toEqual(expected);
});

test('Should find task by id', () => {
    const startedTasks = [
        {
            id: 1,
            name: 'Task #1',
            done: true
        },
        {
            id: 2,
            name: 'Task #2',
            done: false
        }
    ];

    const updatedTask: Task = {
            id: 2,
            name: 'Task #2',
            done: true
        };

    const expected = [
        {
            id: 1,
            name: 'Task #1',
            done: true
        },
        {
            id: 2,
            name: 'Task #2',
            done: true
        }
    ];

    const result = updateTasks(startedTasks, updatedTask);
    expect(result).toEqual(expected);
});
