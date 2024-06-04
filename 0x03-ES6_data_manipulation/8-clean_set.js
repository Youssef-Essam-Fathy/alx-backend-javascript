export default function cleanSet(set, startingString) {
  if (
    !set && !(set instanceof Set) && typeof startingString !== 'string' && !startingString
  ) {
    return '';
  }
  const stringArray = [];

  for (const string of set) {
    if (string.startsWith(startingString)) {
      stringArray.push(string.slice(startingString.length));
    }
  }

  return stringArray.join('-');
}
