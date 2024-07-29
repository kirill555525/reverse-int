module.exports = function reverse (n) {
  let s = String(n);
  if (s[0] == '-') s = s.slice(1);
  return +(s.split("").reverse().join(""));
}
