import Main from '../pages/Main';
import Todo from '../pages/Todo';
import TodoIdPage from "../pages/TodoIdPage";

export const routes = [
    {path: '/', element: Main},
    {path: '/todo', element: Todo},
    {path: '/todo/:id', element: TodoIdPage},
];
