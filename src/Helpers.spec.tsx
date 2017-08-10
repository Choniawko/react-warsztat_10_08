import { findById } from './Helpers';
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