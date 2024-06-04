export default function cleanSet(set, startingString) {
  if (startingString === '') return '';

  const stringArray = [];

  for (const string of set) {
    if (string.startsWith(startingString)) stringArray.push(string.slice(startingString.length));
  }

  return stringArray.join('-');
}
