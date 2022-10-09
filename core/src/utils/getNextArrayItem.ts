export default function getNextArrayItem(arr) {
  return function (curr) {
    return arr[(arr.findIndex(val => val === curr) + 1) % arr.length];
  };
}