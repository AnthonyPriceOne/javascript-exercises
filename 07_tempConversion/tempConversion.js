const ftoc = function(far) {
  const result = (far - 32) * 5 / 9;
  const maybeDot = result.toString();
  if (maybeDot.indexOf(".") > 0) {
      return Number(result.toFixed(1));
  }
  return result;
};

const ctof = function(cel) {
  const result = (cel * 9 / 5 + 32);
  const maybeDot = result.toString();
  if (maybeDot.indexOf(".") > 0) {
      return Number(result.toFixed(1));
  }
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
