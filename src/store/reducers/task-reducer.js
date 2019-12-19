import {CREATE_TASK, DELETE_TASK, TOGGLE_STATUS_TASK, SET_VISIBILITY_FILTER,} from '../actions'
import {initialState} from '../initial-state';

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks,{
          id: action.id,
          text: action.text,
          completed: false
        }]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t)=>{return t.id !== action.id})
      }
    case TOGGLE_STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t)=>{
          if(t.id===action.id){
            t.completed = !t.completed;
          }
          return t;
        })
      }
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      }
    default:
      return state;
  }
};
