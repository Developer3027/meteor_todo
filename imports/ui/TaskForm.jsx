import React, { useState } from 'react'
import { TasksCollection } from '/imports/api/TasksCollection';

export const TaskForm = ({ user }) => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if(!text) return;

    TasksCollection.insert({
      userId: user._id,
      text: text.trim(),
      createdAt: new Date()
    });

    setText("");
  }

  return(
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type and add a new task'
      />
      <button type='submit'>Add Task</button>
    </form>
  )
};
