import { useEffect, useState } from 'react';
import { getBirthDate } from '../../service/BithDateService';

export const Tabel = value => {
  const [object, setObject] = useState({});
  useEffect(() => {
    const birthDate = value;
    if (birthDate?.value) {
      getBirthDate(birthDate)
        .then(res => {
          setObject(res); // Установите объект состояния с полученными данными
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
        });
    }
  }, [value]);
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
  } = object;
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 ">
        <tbody>
          <tr className="bg-blue-600 border-b border-blue-400">
            <td className="px-6 py-4 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Професійний вектор</span>
                <span className="text-white" id="destinyNumber">
                  {fateNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium border ">
              <div className="flex flex-col items-center">
                <span>Побут</span>
                <span className="text-white" id="everydayLife">
                  {everyDayLifeNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium border ">
              <div className="flex justify-between">
                <span></span>
                <span className="text-white"></span>
              </div>
            </td>
            <td className="px-6 py-4  whitespace-nowrap font-medium ">
              <div className="flex flex-col items-center">
                <span>Темперамент</span>
                <span className="text-white" id="temperament">
                  {passionNumber}
                </span>
              </div>
            </td>
          </tr>
          <tr className="border-b bg-blue-600 border-gray-200 dark:border-gray-700">
            <td className="px-6 py-4 bg-blue-500 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Характер</span>
                <span className="text-white" id="block1">
                  {characterNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium bg-blue-500 border">
              <div className="flex flex-col items-center">
                <span>Здоров'я</span>
                <span className="text-white" id="block4">
                  {healthNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 bg-blue-500 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Удача</span>
                <span className="text-white" id="block7">
                  {luckNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Ціль</span>
                <span className="text-white" id="purposefulness">
                  {aimNumber}
                </span>
              </div>
            </td>
          </tr>
          <tr className="border-b bg-blue-600 border-gray-200 dark:border-gray-700">
            <td className="px-6 py-4 bg-blue-500 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Енергія</span>
                <span className="text-white" id="block2">
                  {energyNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium bg-blue-500 border">
              <div className="flex flex-col items-center">
                <span>Логіка</span>
                <span className="text-white" id="block5">
                  {logicNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 bg-blue-500 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Обов'язок</span>
                <span className="text-white" id="block8">
                  {dutyNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4  whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Сім'я</span>
                <span className="text-white" id="family">
                  {familyNumber}
                </span>
              </div>
            </td>
          </tr>
          <tr className="border-b bg-blue-600 border-gray-200 dark:border-gray-700">
            <td className="px-6 py-4 bg-blue-500 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Інтерес</span>
                <span className="text-white" id="block3">
                  {curiosityNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium bg-blue-500 border">
              <div className="flex flex-col items-center">
                <span>Праця</span>
                <span className="text-white" id="block6">
                  {workNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 bg-blue-500 whitespace-nowrap font-medium border">
              <div className="flex flex-col items-center">
                <span>Пам'ять</span>
                <span className="text-white" id="block9">
                  {memoryNumber}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 font-medium whitespace-nowrap border">
              <div className="flex flex-col items-center">
                <span>Звички</span>
                <span className="text-white" id="stability">
                  {habitsNumber}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
