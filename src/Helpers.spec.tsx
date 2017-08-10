import { findById, toggleTask, updateTasks, addTask } from './Helpers';
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

test('Should add task to state', () => {

    const startTaskList = [
        {
            id:  1,
            name: 'Name #1',
            done: false
        },
        {
            id:  2,
            name: 'Name #2',
            done: false
        },
    ];

    const receivedTasks = [
         {
            id:  1,
            name: 'Name #1',
            done: false
        },
        {
            id:  2,
            name: 'Name #2',
            done: false
        },
        {
            id:  3,
            name: 'Name #3',
            done: false
        }
    ]; 

    const added = 'Name #3';

    const finishedTask = addTask(added, startTaskList);

    expect(finishedTask).toEqual(receivedTasks);

});