import { useState } from 'react';

import { Input } from 'components/Input/Input';
import { SubmitButton } from 'components/SubmitButton/SubmitButton';

export const PickerContainer = ({ onSubmitBithDate }) => {
  const [birthDate, setBirthDate] = useState('');

  const onChange = e => {
    let formattedDate = e.target.value.replace(/\D/g, '');
    if (formattedDate.length > 2) {
      formattedDate = formattedDate.slice(0, 2) + '.' + formattedDate.slice(2);
    }
    if (formattedDate.length > 5) {
      formattedDate = formattedDate.slice(0, 5) + '.' + formattedDate.slice(5);
    }
    setBirthDate(formattedDate);
  };

  const onSubmit = e => {
    e.preventDefault();

    onSubmitBithDate(birthDate);
  };
  return (
    <div className="mb-10 mt-5 flex items-center flex-col">
      <span className="text-center mb-5">Введіть дату народження</span>
      <div className="flex justify-center ">
        <Input onChange={onChange} value={birthDate} />
        <SubmitButton onSubmit={onSubmit} value={birthDate} />
      </div>
    </div>
  );
};
