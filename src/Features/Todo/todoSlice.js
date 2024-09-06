import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[
        {
            id: 1,
            todo: "Learn React"
        },
        {
            id: 2,
            todo: "Learn Redux-Toolkit"
        },
    ]
}

const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            const todo = {
                id: nanoid,
                todo: action.payload,
                isComplete: false
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action) => {

            const filteredTodos = state.todos.filter( item => item.id !== action.payload)
            state.todos=filteredTodos

        },
        toggleComplete:(state, action) => {

            state.todos.map( item => item.id === action.payload? {...item, isComplete: !item.isComplete} : item)

        },
        updateTodo:(state, action) => {
            state.todos.map( item => item.id === action.payload? {...item, todo: action.payload} : item)
        },
    }
})

export default todoSlice.reducer;

export const {addTodo, updateTodo, removeTodo, toggleComplete} = todoSlice.actions