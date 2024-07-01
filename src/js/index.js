// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

//1 - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2];

const numbersMultiply = (array) => {
  array.forEach((number, index) => {
    console.log(number * index);
  });
};
numbersMultiply(numbers);

//2 - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

//const numbers2 = [3, 4];

const numbersDivision = (array) => {
  const result = array.map((number, index) => {
    return number / (index + 2);
  });

  return result;
};

const resultNumberDivision = numbersDivision([3, 4]);

console.log(resultNumberDivision);
