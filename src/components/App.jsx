import { PhotoContainer } from './PhotoContainer/PhotoContainer';
import { PickerContainer } from './PickerContainer/PickerContainer';
import { Social } from './Social/Social';
import { Tabel } from './Table/Table';
import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  const onSubmit = birthDate => {
    setValue(birthDate);
  };
  return (
    <div className=" min-[320px]:p-1 sm:p-5 md:p-5 lg:p-12 xl:p-2">
      <PhotoContainer />
      <PickerContainer onSubmitBithDate={onSubmit} />
      <Tabel value={value} />
      <Social />
    </div>
  );
};
