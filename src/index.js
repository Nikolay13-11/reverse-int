module.exports = function reverse (n) {
    let s = n.toString();
  let arr = s.split('');
  arr = arr.reverse();
  s = arr.join('');
  return n = Number.parseInt(s);
}
