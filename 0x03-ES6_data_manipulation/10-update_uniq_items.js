export default function updateUniqueItems(map) {
  for (const [key, value] of map) {
    if (value === 1) map.set(key, 100);
    if (!map || !(map instanceof Map)) throw new Error('Cannot process');
  }

  return map;
}
