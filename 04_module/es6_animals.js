// ES6 방식 - export

// export const animals = ['puppy', 'cat'];

// export function showAnimals() {
//   animals.map((el) => console.log(el));
// }

const animals = ['puppy', 'cat'];

function showAnimals() {
  animals.map((el) => console.log(el));
}

export { animals as ani, showAnimals as show };
