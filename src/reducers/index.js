import {
  ADD_TOPICK,
  ADD_TODO,
  TOGGLE_DONE,
  REMOVE_TODO,
  EDIT_TODO,
  REMOVE_TOPICK,
  EDIT_TOPICK,
  DRAG_TODO,
} from "../constants/actionTypes";

const initialState = {
  topicks: [],
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
    case REMOVE_TOPICK: {
      const newState = state.topicks.filter(
        (topick) => topick.id !== action.payload
      );

      return {
        topicks: newState,
      };
    }
    case EDIT_TOPICK: {
      const newState = state.topicks.map((topick) => {
        if (topick.id === action.payload.topickId) {
          topick.title = action.payload.title;
        }
        return topick;
      });

      return {
        topicks: newState,
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
    case DRAG_TODO: {
      let currentTodo = {};
      let newState = state.topicks.map((topick) => {
        if (topick.id === action.payload.sourceTopickId) {
          currentTodo = topick.todos.find(
            (todo) => todo.id === action.payload.todoId
          );
          topick.todos = topick.todos.filter(
            (todo) => todo.id !== action.payload.todoId
          );
        }
        return topick;
      });
      newState = newState.map((topick) => {
        if (topick.id === action.payload.destinationTopickId) {
          topick.todos.splice(action.payload.index, 0, currentTodo);
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
