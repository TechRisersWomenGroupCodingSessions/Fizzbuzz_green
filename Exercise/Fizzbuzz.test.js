const fizzbuzz = require("./Fizzbuzz");

// [...Array(10).keys()];

it("returns Fizz for multiples of 3, Buzz for 5, Fizz-Buzz for 3 and 5  ", () => {
  expect(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 15])).toBe(
    "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz-Buzz"
  );
});
