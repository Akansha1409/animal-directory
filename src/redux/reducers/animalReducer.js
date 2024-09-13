import { GET_ANIMALS, ADD_ANIMAL, UPDATE_ANIMAL, DELETE_ANIMAL } from '../actions/animalActions';

const initialState = {
  animals: []
};

export const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMALS:
      return { ...state, animals: action.payload };
    case ADD_ANIMAL:
      return { ...state, animals: [...state.animals, action.payload] };
    case UPDATE_ANIMAL:
      return {
        ...state,
        animals: state.animals.map((animal) =>
          animal.id === action.payload.id ? action.payload : animal
        )
      };
    case DELETE_ANIMAL:
      return { ...state, animals: state.animals.filter((animal) => animal.id !== action.payload) };
    default:
      return state;
  }
};
