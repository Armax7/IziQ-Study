export function isObject(object) {
  return (
    !!object &&
    typeof object === "object" &&
    !Array.isArray(object) &&
    object !== null
  );
}

export function sortAscCompareFn (a, b) {
  if (a < b) {
      return -1;
  }
  else if (a > b) {
      return 1;
  }
  return 0;
}

export function sortDescCompareFn(a, b) {
  if (a > b) {
      return -1;
  }
  else if (a < b) {
      return 1;
  }
  return 0;
}