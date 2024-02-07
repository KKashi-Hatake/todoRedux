import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import {useDispatch } from "react-redux";
import { removeTodo, toggleComplete, updateTodo } from "../Redux/todoSlice";


const Todo = ({ obj }) => {
  const dispatch=useDispatch()
  const [text, setText] = useState(obj.text);
  const [check, setCheck] = useState(obj.complete);
  const [edit, setEdit] = useState(false);
  const handler = (id, text) => {
    setEdit((prev) => !prev);
    if (edit) {
      dispatch(updateTodo({id,text}))
    }
  };
  const delHandler=(id)=>{
    dispatch(removeTodo(id))
  }
  const checkHandler = (id) => {
    const val = !obj.complete;
    setCheck(val);
    dispatch(toggleComplete({id,val}))
  };

  return (
    <div className="h-10 w-4/5 flex text-purple-950  mb-2 justify-center items-center">
      <div className="w-3/5 h-10 outline-none rounded-md flex items-center relative text-white bg-gradient-to-r from-green-400 to-blue-500 p-2">
        <input
          type="checkbox"
          className="outline-none h-4 w-4 mx-2"
          name=""
          id=""
          checked={check}
          onChange={()=>checkHandler(obj.id)}
        />
        <input
          className={`bg-transparent outline-none ${
            check ? "line-through" : ""
          }`}
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          readOnly={!edit}
        />
        <button
          onClick={()=>handler(obj.id,text)}
          className="h-10 w-10 ml-1 absolute right-2 rounded-lg  cursor-pointer text-2xl flex justify-center items-center"
        >
          {!edit ? (
            <CiEdit className="text-white" />
          ) : (
            <FaRegSave className="text-white" />
          )}
        </button>
      </div>
      <button onClick={(e)=>{
        e.preventDefault();
        delHandler(obj.id)}} className="h-10 w-10 ml-1 rounded-lg bg-gradient-to-r cursor-pointer from-indigo-400 to-purple-500 flex justify-center items-center">
        <MdDeleteOutline />
      </button>
    </div>
  );
};

export default Todo;
