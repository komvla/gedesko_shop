import { createStore } from 'redux';

interface AppState {
    selectedCategory: string;
    sortBy: {
      price: 'ASC' | 'DESC' | null;
      rating: 'ASC' | 'DESC' | null;
      reviews: 'ASC' | 'DESC' | null;
    };
  }

  const initialState: AppState = {
    selectedCategory: 'all',
    sortBy: {
      price: null,
      rating: null,
      reviews: null,
    }, 
  };

  function rootReducer(state = initialState, action: any ): AppState {
    switch (action.type) {
      case 'SET_SELECTED_CATEGORY':
        return {
          ...state,
          selectedCategory: action.payload,
        };
        case 'SET_ACTIVE_FILTER':
          return {
            ...state,
            sortBy: action.payload,
          };
      default:
        return state;
    }
  }

  export const store = createStore(rootReducer);
