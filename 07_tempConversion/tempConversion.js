const ftoc = function(x) {

  let conv = (x - 32) * (5/9);
  if (conv != 0) {

  conv = (parseFloat(conv.toFixed(1))) ; 

  }

  return conv
};

const ctof = function(y) {

  let conv = y * (9/5) + 32

  if (conv != 0) {

  conv = (parseFloat(conv.toFixed(1)));
  }

  return conv

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
