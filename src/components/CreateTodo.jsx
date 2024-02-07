import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import {useDispatch} from 'react-redux'
import { addTodo } from "../Redux/todoSlice";



const CreateTodo = () => {
    const dispatch = useDispatch()
  const [inputText, setInputText] = useState("");
  const handler = (e) => {
    e.preventDefault();
    let obj={
        id:nanoid(),
        text:inputText,
        complete:false
    }
    dispatch(addTodo(obj))
    setInputText("")
  };

  return (
    <div className="h-28 w-4/5 flex text-purple-950   justify-center items-center">
      <input
        type="text"
        className="w-3/5 h-10 outline-none rounded-md bg-gradient-to-r from-green-400 to-blue-500 p-2"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your tasks"
      />
      <button
        onClick={handler}
        className="h-10 w-10 ml-1 rounded-lg bg-gradient-to-r cursor-pointer from-indigo-400 to-purple-500 flex justify-center items-center"
      >
        <FaCheck className="text-white" />
      </button>
    </div>
  );
};

export default CreateTodo;
