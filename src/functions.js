export const getRandomNumberRange = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
};

export const isEven = (n) => n % 2 === 0;

export const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  const iter = (dividend, divider) => {
    if (dividend % divider === 0) {
      return false;
    }
    if (divider > dividend / 2) {
      return true;
    }
    return iter(dividend, divider + 1);
  };

  return iter(n, 2);
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const generateArithmeticProgression = () => {
  const begining = getRandomNumberRange(2, 11);
  const step = getRandomNumberRange(2, 6);
  const length = getRandomNumberRange(5, 11);
  const result = [begining];

  let item = begining;

  while (result.length <= length) {
    item += step;
    result.push(item);
  }

  return result;
};
