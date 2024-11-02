import React, { useContext } from 'react';
import ValueContext from '../../model/ValueContext';

export const Tabel = () => {
  const value = useContext(ValueContext);

  const {
    aimNumber,
    characterNumber,
    curiosityNumber,
    dutyNumber,
    energyNumber,
    everyDayLifeNumber,
    familyNumber,
    fateNumber,
    habitsNumber,
    healthNumber,
    logicNumber,
    luckNumber,
    memoryNumber,
    passionNumber,
    workNumber,
  } = value;
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900">
        <tbody>
          <tr className="border-b border-blue-400">
            <td className="px-4 py-4 sm:px-2 md:px-2 min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl  font-bold font-bold  text-gray-900 border bg-blue-200">
              <div className="flex flex-col items-center text-center">
                <span>Професійний вектор</span>
                <span id="destinyNumber">{fateNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold font-bold  text-gray-900 border bg-blue-200">
              <div className="flex flex-col items-center">
                <span>Побут</span>
                <span id="everydayLife">{everyDayLifeNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl  font-bold bg-blue-200 text-gray-900 border ">
              <div className="flex justify-between">
                <span></span>
                <span></span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2  whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-base md:text-2xl font-bold bg-blue-200 text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Темперамент</span>
                <span id="temperament">{passionNumber}</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-4 sm:px-2 md:px-2  whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Характер</span>
                <span id="block1">{characterNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900  border">
              <div className="flex flex-col items-center">
                <span>Здоров'я</span>
                <span id="block4">{healthNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Удача</span>
                <span id="block7">{luckNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900 border bg-blue-200">
              <div className="flex flex-col items-center">
                <span>Ціль</span>
                <span id="purposefulness">{aimNumber}</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl  font-bold  text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Енергія</span>
                <span id="block2">{energyNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl  font-bold text-gray-900  border">
              <div className="flex flex-col items-center">
                <span>Логіка</span>
                <span id="block5">{logicNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2  whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Обов'язок</span>
                <span id="block8">{dutyNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2  whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold bg-blue-200 text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Сім'я</span>
                <span id="family">{familyNumber}</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-4 sm:px-2 md:px-2  whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Інтерес</span>
                <span id="block3">{curiosityNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900  border">
              <div className="flex flex-col items-center">
                <span>Праця</span>
                <span id="block6">{workNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2  whitespace-nowrap min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl font-bold text-gray-900 border">
              <div className="flex flex-col items-center">
                <span>Пам'ять</span>
                <span id="block9">{memoryNumber}</span>
              </div>
            </td>
            <td className="px-4 py-4 sm:px-2 md:px-2 min-[320px]:px-2 min-[320px]:pl-1.5  sm:text-lg md:text-2xl bg-blue-200 font-bold text-gray-900 whitespace-nowrap border">
              <div className="flex flex-col items-center">
                <span>Звички</span>
                <span id="stability">{habitsNumber}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
