export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) {
    return '';
  }

  let result = [];

  set.forEach((val) => {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const str = val.substring(startString.length);
      result.push(str);
    }
  });

  return result.join('-');

/*  return result.endsWith('-') ? result.slice(0, -1) : result;*/
}
