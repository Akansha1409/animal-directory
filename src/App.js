import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimals, addAnimal, updateAnimal, deleteAnimal } from './redux/actions/animalActions';

const App = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals);

  const [newAnimal, setNewAnimal] = useState({ name: '', species: '' });

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  const handleAddAnimal = () => {
    if (newAnimal.name && newAnimal.species) {
      dispatch(addAnimal(newAnimal));
      setNewAnimal({ name: '', species: '' });
    }
  };

  const handleUpdateAnimal = (id) => {
    const updatedSpecies = prompt('Enter new species');
    if (updatedSpecies) {
      dispatch(updateAnimal(id, { species: updatedSpecies }));
    }
  };

  const handleDeleteAnimal = (id) => {
    dispatch(deleteAnimal(id));
  };

  return (
    <div>
      <h1>Animals Directory</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newAnimal.name}
          onChange={(e) => setNewAnimal({ ...newAnimal, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Species"
          value={newAnimal.species}
          onChange={(e) => setNewAnimal({ ...newAnimal, species: e.target.value })}
        />
        <button onClick={handleAddAnimal}>Add Animal</button>
      </div>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {animal.name} ({animal.species})
            <button onClick={() => handleUpdateAnimal(animal.id)}>Update</button>
            <button onClick={() => handleDeleteAnimal(animal.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
