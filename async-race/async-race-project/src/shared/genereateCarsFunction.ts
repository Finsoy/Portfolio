export function generateCarsFunction() {
  const NUMBER_ELEMENTS_IN_ARRAY = 12;
  const arrrayOfNames: Array<string> = [
    'Tesla',
    'Ford',
    'Porsche',
    'BMW',
    'Toyota',
    'Opel',
    'Volkswagen',
    'Nissan',
    'Bugatti',
    'Cadillac',
    'Bentley',
    'Jaguar',
  ];
  const arrrayOfModels: Array<string> = [
    'Hatchback',
    'Sedan',
    'MPV',
    'SUV',
    'Crossover',
    'Coupe',
    'Model A',
    'Model S',
    'Model 10',
    '5',
    '1',
    '7',
  ];
  const arrrayOfColors: Array<string> = [
    '#eb4034',
    '#eb7d34',
    '#ebc334',
    '#c8f525',
    '#000000',
    '#25f53a',
    '#25f59b',
    '#25f5ee',
    '#2571f5',
    '#5925f5',
    '#b325f5',
    '#ffffff',
  ];

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  function pickRandomElement(arr: Array<string>) {
    const random = getRandomInt(NUMBER_ELEMENTS_IN_ARRAY);
    return arr[random];
  }

  return {
    name: `${pickRandomElement(arrrayOfNames)} ${pickRandomElement(
      arrrayOfModels
    )}`,
    color: pickRandomElement(arrrayOfColors),
    id: 0,
  };
}
