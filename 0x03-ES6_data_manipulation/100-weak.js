export const weakMap = new WeakMap();

export function queryAPI(apiEndPoint) {
  if (!(weakMap.has(apiEndPoint))) weakMap.set(apiEndPoint, 0);
  const callCount = weakMap.get(apiEndPoint) + 1;
  weakMap.set(apiEndPoint, callCount);
  if (callCount >= 5) throw new Error('Endpoint load is high');
}
