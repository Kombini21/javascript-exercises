const add = function(...args) {

  let narray = [...args];

  const reduceSum = narray.reduce((acc, item) => parseInt(acc) + parseInt(item), 0);

  return reduceSum
	
};

const subtract = function(...args) {

  let narray = [...args];
	
  const reduceSum = narray.reduce((total, num) => total - num);
  return reduceSum


};

const sum = function(x) {

  let narray = x;

  const reduceSum = narray.reduce((acc, item) => parseInt(acc) + parseInt(item), 0);

  return reduceSum


	
};

const multiply = function(x) {

  let narray = x;

  const reduceSum = narray.reduce((acc, item) => acc * item);

  return reduceSum

};

const power = function(...x) {
	
  let narray = [...x];

  const reduceSum = narray.reduce((acc, item) => acc ** item);

  return reduceSum

};

const factorial = function(x) {


  let total = x;  

  if (x == 0) {

    return 1
  }else {
    
    for (let i = 1; i < x; i++) {

    total = total * (i)
    
  }

  return total

}

  
  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
