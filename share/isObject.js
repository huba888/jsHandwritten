function isObject(target) {
  return (
    (typeof target === "object" && target !== null) ||
    typeof target === "function"
  );
}
module.exports = {
  isObject,
};
