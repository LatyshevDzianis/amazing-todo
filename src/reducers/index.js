import {
  ADD_TOPICK,
  ADD_TODO,
  TOGGLE_DONE,
  REMOVE_TODO,
  EDIT_TODO,
  // EDIT_TOPICK,
  // REMOVE_TOPICK,
} from "../constants/actionTypes";

const initialState = {
  topicks: [
    {
      id: 1,
      title: "Работа",
      todos: [
        {
          id: 1,
          text: "Сделать Amaxing Todo",
          done: false,
        },
        {
          id: 2,
          text: "Взять task",
          done: true,
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPICK: {
      return {
        topicks: [
          ...state.topicks,
          {
            id: Date.now(),
            title: action.payload,
            todos: [],
          },
        ],
      };
    }
    case ADD_TODO: {
      const newState = state.topicks.map((topick) => {
        if (topick.id === action.payload.topickId) {
          topick.todos = [
            ...topick.todos,
            {
              id: Date.now(),
              text: action.payload.text,
              done: false,
            },
          ];
          return topick;
        }
        return topick;
      });

      return {
        topicks: newState,
      };
    }
    case REMOVE_TODO: {
      const newState = state.topicks.map((topick) => {
        if (topick.id === action.payload.topickId) {
          topick.todos = topick.todos.filter(
            (todo) => todo.id !== action.payload.todoId
          );
        }
        return topick;
      });

      return {
        topicks: newState,
      };
    }
    case EDIT_TODO: {
      const newState = state.topicks.map((topick) => {
        if (topick.id === action.payload.topickId) {
          topick.todos = topick.todos.map((todo) => {
            if (todo.id === action.payload.todoId) {
              todo.text = action.payload.text;
            }
            return todo;
          });
        }
        return topick;
      });

      return {
        topicks: newState,
      };
    }
    case TOGGLE_DONE: {
      const newState = state.topicks.map((topick) => {
        if (topick.id === action.payload.topickId) {
          topick.todos.map((todo) => {
            if (todo.id === action.payload.todoId) {
              todo.done = !todo.done;
            }
            return todo;
          });
        }
        return topick;
      });

      return {
        topicks: newState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
