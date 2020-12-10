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

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  
  return(
    <div>
    <h1>Welcome to Meteor!</h1>
    <TaskForm />
    <ul>
      { tasks.map(task => < Task key={task._id} task={task} onCheckboxClick={toggleChecked}/>) }
    </ul>
  </div>
  )
};
