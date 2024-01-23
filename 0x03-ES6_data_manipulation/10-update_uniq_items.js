export default function updateUniqueItems(myMap) {
  if (!myMap) {
    throw new Error('Cannot process');
  }

  myMap.forEach((value, key) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
}
