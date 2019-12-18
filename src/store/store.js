import {createStore} from "redux";

const CREATE_TASK = "CREATE_TASK";
const DELETE_TASK = "DELETE_TASK";
const TOGGLE_STATUS_TASK = "TOGGLE_STATUS_TASK";

let initialState = {
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
      completed: false
    },
    {
      id: 3,
      text: "learn TypeScript",
      completed: false
    }
  ]
};

const itemReducer = (state, action) => {
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
    default:
      return state;
  }
};

export const createTask = (id, text) => ({
  type: CREATE_TASK,
  id,
  text
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id
})

export const toggleStatusTask = (id, completed) => ({
  type: TOGGLE_STATUS_TASK,
  id,
  completed
})

export const store = createStore(itemReducer, initialState);