import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from "../features/todo/todoSlice"
import { motion } from "framer-motion"
function AddTodo(){
    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput(" ");

    }
    return(
      <div className="bg-[#00FFFF]">
      <motion.h1  initial={{ opacity: 0 ,y:-500}}
        animate ={{ opacity: 1,y:0 }} 
        transition={{
          delay:1,
        }}
       className="pt-[20px] font-[900] text-[30px] text-shadow mx-[40%]">Todo App</motion.h1>
      <motion.form 
        initial={{ opacity: 0 ,y:-500}}
        animate ={{ opacity: 1,y:0 }} 
        transition={{
          delay:1,
        }}
      onSubmit={addTodoHandler} className="space-x-3 pt-12">
      
         
         <input type="text"className=' ml-[15%] mb-[10px] w-[50%] bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
         placeholder="enter a todo" value={input} 
         onChange={(e)=>{setInput(e.target.value)}}
         />
         <button type='submit'
         className="text-white bg-indigo-500 border-0 py-2 px-6
         focus:outline-none hover:bg-indigo-600 rounded text-lg" >AddTodo</button>



      </motion.form>
      </div>

    );
}
export default AddTodo;