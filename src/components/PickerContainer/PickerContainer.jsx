import { useState } from 'react';

import { Input } from 'components/Input/Input';
import { SubmitButton } from 'components/SubmitButton/SubmitButton';

export const PickerContainer = ({ onSubmitBithDate }) => {
  const [birthDate, setBirthDate] = useState('');

  const onChange = e => {
    const formattedDate = e.target.value.split('-').reverse().join('.');
    setBirthDate(formattedDate);
  };

  const onSubmit = e => {
    e.preventDefault();

    onSubmitBithDate(birthDate);
  };
  return (
    <div className="mb-10 mt-20 flex items-center flex-col">
      <span className="text-center mb-5">Введіть дату народження</span>
      <div className="flex justify-center ">
        <Input onChange={onChange} />
        <SubmitButton onSubmit={onSubmit} value={birthDate} />
      </div>
    </div>
  );
};
