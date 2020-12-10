import React from 'react';
import { useTracker } from 'meteor/react-meteor-data'
import { TasksCollection } from '/imports/api/TasksCollection'
import { Task } from './Task.jsx';
import { TaskForm } from './TaskForm'

// const tasks = [
//   {_id: 1, text: 'check current site for apple meta tag.'},
//   {_id: 2, text: 'task 2'},
//   {_id: 3, text: 'task 3'},
//   {_id: 4, text: 'task 4'}
// ]

const toggleChecked =({ _id, isChecked }) => {
  TasksCollection.update(_id, { 
    $set: { isChecked: !isChecked }
   })
}

const deleteTask = ({ _id }) => {
  TasksCollection.remove(_id);
}

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  
  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
          <h1>📝️ To Do List</h1>
          </div>
        </div>
      </header>

      <div className="main">
        <TaskForm />

        <ul className="tasks">
          {tasks.map(task => (
            <Task
              key={task._id}
              task={task}
              onCheckboxClick={toggleChecked}
              onDeleteClick={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
