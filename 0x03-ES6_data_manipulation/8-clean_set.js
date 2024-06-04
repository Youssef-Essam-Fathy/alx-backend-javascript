export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const result = [];

  for (const string of set) {
    if (string.startsWith(startString)) {
      result.push(string.slice(startString.length));
    }
  }

  return result.join('-');
}
