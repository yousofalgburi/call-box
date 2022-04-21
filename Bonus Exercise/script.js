var array_one = [
  "apple",
  "dog",
  "cat",
  "food",
  "kite",
  "elephant",
  "lunch",
  "book",
  "laptop",
]

var array_two = ["dog", "goose", "kite", "meal", "laptop"]

var valuesMatchWithCustom = (array1, array2) => {
  let result = []
  let arrayLength = array2.length
  let whichArray = 2

  if (array1.length > array2.length) {
    arrayLength = array1.length
    whichArray = 1
  }

  for (let i = 0; i < arrayLength; i++) {
    if (whichArray === 1) {
      if (array2.includes(array1[i])) {
        result.push(array1[i])
      }
    } else {
      if (array1.includes(array2[i])) {
        result.push(array2[i])
      }
    }
  }

  return result
}

var valuesMatchWithSets = (array1, array2) => {
  const set1 = new Set(array1)
  const set2 = new Set(array2)
  return [...set1].filter((n) => set2.has(n))
}

console.log(valuesMatchWithSets(array_one, array_two))
console.log(valuesMatchWithCustom(array_one, array_two))
