import React from 'react';
import { Task } from './Task.jsx';

const tasks = [
  {_id: 1, text: 'check current site for apple meta tag.'},
  {_id: 2, text: 'task 2'},
  {_id: 3, text: 'task 3'},
  {_id: 4, text: 'task 4'}
]

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      { tasks.map(task => < Task key={task._id} task={task}/>) }
    </ul>
  </div>
);
