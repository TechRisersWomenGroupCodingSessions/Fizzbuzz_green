const fizzbuzz = (numbers) => {
  const newArr = numbers.map((numb) => {
    if (numb % 15 === 0) {
      return "Fizz-Buzz";
    } else if (numb % 3 === 0) {
      return "Fizz";
    } else if (numb % 5 === 0) {
      return "Buzz";
    } else {
      return numb;
    }
  });
  return newArr.join();
};

module.exports = fizzbuzz;
