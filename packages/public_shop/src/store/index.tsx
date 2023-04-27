import { createStore } from 'redux';

interface AppState {
    selectedCategory: string;
  }

  const initialState: AppState = {
    selectedCategory: 'all',
  };

  function rootReducer(state = initialState, action: {type: string, payload: string}): AppState {
    switch (action.type) {
      case 'SET_SELECTED_CATEGORY':
        return {
          ...state,
          selectedCategory: action.payload,
        };
      default:
        return state;
    }
  }

  export const store = createStore(rootReducer);
