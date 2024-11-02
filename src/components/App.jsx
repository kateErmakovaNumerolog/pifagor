import { PhotoContainer } from './PhotoContainer/PhotoContainer';
import { PickerContainer } from './PickerContainer/PickerContainer';
import { observer } from 'mobx-react-lite';
import { Social } from './Social/Social';
import { Tabel } from './Table/Table';
import { model } from 'model/Model';
import ValueContext from '../model/ValueContext';

export const App = observer(() => {
  const onSubmit = birthDate => {
    model.replaceDate(birthDate);
  };

  return (
    <ValueContext.Provider value={model.value}>
      <div className=" min-[320px]:p-1 sm:p-5 md:p-5 lg:p-12 xl:p-2">
        <PhotoContainer />
        <PickerContainer onSubmitBithDate={onSubmit} />
        <Tabel />
        <Social />
      </div>
    </ValueContext.Provider>
  );
});
