import { makeAutoObservable } from 'mobx';

class Model {
  dateArray = [];
  secondNumber = [];
  fullNumbers = [];
  matrix = [];
  destiny = '';
  value = {};

  constructor() {
    makeAutoObservable(this);
  }

  replaceDate(birthDate) {
    this.dateArray = birthDate.split('.').flatMap(part => part.split(''));
    this.correctBirthDay();
  }

  correctBirthDay() {
    const clearedArray = this.clearArray(this.dateArray);
    this.calculateSecondNumbers(clearedArray);
  }

  clearArray(dateArray) {
    return dateArray.filter(num => num !== '0');
  }

  calculateSecondNumbers(clearedArray) {
    const firstNum = this.firstSecondNumber();
    const secondNum = this.secondSecondNumber(firstNum);
    const thirdNum = Math.abs(firstNum - 2 * parseInt(this.dateArray[0], 10));

    this.secondNumber = [
      firstNum,
      secondNum,
      thirdNum,
      this.secondSecondNumber(thirdNum),
    ];

    const newFullNumbers = clearedArray.concat(this.secondNumber);
    this.fullNumbers = this.toInteger(newFullNumbers);
    this.matrix = this.getMatrix();
    this.destiny = this.destinyNumber();
    this.showMatrix(this.matrix, this.destiny);
  }

  firstSecondNumber() {
    return this.dateArray.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }

  destinyNumber() {
    return this.secondNumber[1] === 11
      ? 11
      : this.secondSecondNumber(this.secondNumber[1]);
  }
  secondSecondNumber(num) {
    return num
      .toString()
      .split('')
      .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }

  toInteger(fullNumbers) {
    return fullNumbers.flatMap(num => num.toString().split('').map(Number));
  }

  getMatrix() {
    const representations = Array(14).fill('');
    const counts = Array(9).fill(0);

    for (let number of this.fullNumbers) {
      if (number >= 1 && number <= 9) {
        representations[number - 1] += number.toString();
        counts[number - 1]++;
      }
    }

    representations[9] = counts[2] + counts[4] + counts[6];
    representations[10] = counts[3] + counts[4] + counts[5];
    representations[11] = counts[1] + counts[4] + counts[7];
    representations[12] = counts[0] + counts[3] + counts[6];
    representations[13] = counts[2] + counts[5] + counts[8];

    for (let i = 0; i < 9; i++) {
      if (representations[i] === '') {
        representations[i] = 0;
      }
    }

    return representations;
  }

  showMatrix(matrix, destiny) {
    this.value = {
      aimNumber: matrix[12] || '',
      characterNumber: matrix[0] || '',
      curiosityNumber: matrix[2] || '',
      dutyNumber: matrix[7] || '',
      energyNumber: matrix[1] || 0,
      everyDayLifeNumber: matrix[10] || '',
      familyNumber: matrix[11] || '',
      fateNumber: destiny || '',
      habitsNumber: matrix[13] || '',
      healthNumber: matrix[3] || '',
      logicNumber: matrix[4] || '',
      luckNumber: matrix[6] || '',
      memoryNumber: matrix[8] || '',
      passionNumber: matrix[9] || '',
      workNumber: matrix[5] || '',
    };
  }
}

export const model = new Model();
