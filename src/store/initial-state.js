import {SHOW_ALL } from './actions';

export let initialState = {
  tasks: [{
      id: 0,
      text: "learn React",
      completed: false
    },
    {
      id: 1,
      text: "learn Redux",
      completed: false
    },
    {
      id: 2,
      text: "learn React Native",
      completed: true
    },
    {
      id: 3,
      text: "learn TypeScript",
      completed: false
    }
  ], 
  visibilityFilter: SHOW_ALL
};
