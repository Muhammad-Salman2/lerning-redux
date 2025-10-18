import {createsSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id : nanoid(), text: 'Learn Redux Toolkit'}],
}

export const todoSlice = createsSlice({
    name: 'todos',
    initialState,
})