import {createsSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id : nanoid(), text: 'Learn Redux Toolkit'}],
}

export const todoSlice = createsSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {id : nanoid(), text : action.payload};
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }


    },
})