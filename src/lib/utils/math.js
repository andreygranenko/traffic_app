export function firstDigit(n)
{

  // Find total number of digits - 1
  let digits = Math.floor(Math.log(n)/Math.log(10))

  // Find first digit
  n = Math.floor(n / Math.pow(10, digits))

  // Return first digit
  return n;
}