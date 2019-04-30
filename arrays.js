function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyRemoveElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function removeElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyRemoveElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
