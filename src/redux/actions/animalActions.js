import axios from 'axios';

// Action types
export const GET_ANIMALS = 'GET_ANIMALS';
export const ADD_ANIMAL = 'ADD_ANIMAL';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';

// Action creators
export const getAnimals = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/animals');
  dispatch({ type: GET_ANIMALS, payload: response.data });
};

export const addAnimal = (animal) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/animals', animal);
  dispatch({ type: ADD_ANIMAL, payload: response.data });
};

export const updateAnimal = (id, updatedAnimal) => async (dispatch) => {
  const response = await axios.put(`http://localhost:5000/animals/${id}`, updatedAnimal);
  dispatch({ type: UPDATE_ANIMAL, payload: response.data });
};

export const deleteAnimal = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/animals/${id}`);
  dispatch({ type: DELETE_ANIMAL, payload: id });
};
