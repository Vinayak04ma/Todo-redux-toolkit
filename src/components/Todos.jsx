

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { motion } from "framer-motion";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null); // Track which todo is being edited
  const [editText, setEditText] = useState(""); // Track edited text

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setIsEditing(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
      }}
      className="bg-[#00FFFF] pb-[500px]"
    >
      <div>
        <h1 className="text-[20px] font-[700] ml-[8%]">Todos</h1>
      </div>
      {todos.map((todo) => (
        <motion.li
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
        }}

          className="mt-4 mx-[8%] flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          {isEditing === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="text-black"
            />
          ) : (
            <div className="text-white bg-zinc-800">{todo.text}</div>
          )}
          <div className="flex space-x-1.5 bg-zinc-800" > 
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
            {isEditing === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="text-white bg-green-500 py-1 px-2 hover:bg-green-600 rounded text-md"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="text-white bg-blue-500 py-1 px-2 hover:bg-blue-600 rounded text-md"
              >
                Edit
              </button>
            )}
          </div>
        </motion.li>
      ))}
    </motion.div>
  );
}

export default Todos;
