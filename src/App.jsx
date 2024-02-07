import { useState } from 'react'
import {useSelector} from 'react-redux'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'


function App() {
  const todos = useSelector(state=>state.todos)

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-[#161A30] flex justify-start flex-col to-[#FF6C22]">
        <div className="flex justify-center">
          <CreateTodo />
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="mb-1 text-3xl text-white font-serif">Your Todos</p>
          {todos.map((elem)=>{
            return <Todo obj={elem} key={elem.id}/>
          })}
        </div>
      </div>
    </>
  )
}

export default App
