import { PickerContainer } from './PickerContainer/PickerContainer';
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter
import { Tabel } from './Table/Table';
import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  const onSubmit = birthDate => {
    setValue(birthDate);
  };
  return (
    <div className="p-10">
      <PickerContainer onSubmitBithDate={onSubmit} />
      <Tabel value={value} />
    </div>
  );
};
