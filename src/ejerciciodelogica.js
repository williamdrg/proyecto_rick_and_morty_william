const arr = [1, 4, 8, 7, 3, 15];

const sumPairs = (numbers, n) => {
  let arrayResult = [];

  // Crear un conjunto para almacenar los números que hemos visto
  let seenNumbers = new Set();

  for (let number of numbers) {
    // Calcular la diferencia que necesitamos para alcanzar la suma n
    let complement = n - number;

    // Si la diferencia ya está en el conjunto, hemos encontrado un par
    if (seenNumbers.has(complement)) {
      arrayResult.push([complement, number]);
    }

    // Agregar el número actual al conjunto de vistos
    seenNumbers.add(number);
  }

  return arrayResult;
}

console.log(sumPairs(arr, 8)); // Debería devolver [[1, 7]]
