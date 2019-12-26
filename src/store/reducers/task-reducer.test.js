import {initialState} from '../initial-state';
import { createTask, deleteTask } from '../action-creators';
import { taskReducer } from './task-reducer';


it("length of post should be incremented", () => {
   let action = createTask(4, "test task");

   let newState = taskReducer(initialState, action);

  expect(newState.tasks.length).toBe(5);
});

it("text of new task should be correct", () => {
  let action = createTask(4, "test task");

  let newState = taskReducer(initialState, action);

 expect(newState.tasks[0].text).toBe("test task");
});

it("after deleting length of tasks should be decrement", () => {
  let action = deleteTask(3);

  let newState = taskReducer(initialState, action);

  expect(newState.tasks.length).toBe(3);
});