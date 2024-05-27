export default function appendToEachArrayValue(array, appendString) {
  let list = [];
  for (let value of array) {
    list.push(appendString + value);
  }

  return list;
}
