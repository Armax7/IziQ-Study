export function isObject(object) {
  return (
    !!object &&
    typeof object === "object" &&
    !Array.isArray(object) &&
    object !== null
  );
}
