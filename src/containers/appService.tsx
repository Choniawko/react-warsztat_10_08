export const getTasks = () => {
    return fetch('http://localhost:8000/tasks')
        .then((res: any) => res.json());
};