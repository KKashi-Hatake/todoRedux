import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos:[
      {
        id: 1,
        text: "My first Todo",
        complete: false,
      },
    ]
  },
  reducers: {
    addTodo: (state, actions) => {
      state.todos.push(actions.payload);
    },
    removeTodo: (state, actions) => {
      state.todos=state.todos.filter((obj)=>obj.id!==actions.payload)
    },
    updateTodo: (state, actions) => {
      state.todos=state.todos.map((obj)=>{
        return obj.id===actions.payload.id? {...obj, text:actions.payload.text} :obj;
      })
    },
    toggleComplete: (state,actions) => {
      state.todos=state.todos.map((obj)=>{
        return obj.id===actions.payload.id? {...obj,complete:actions.payload.val} :obj;
      })
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
