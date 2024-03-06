export default function dividedFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    const res = numerator / denominator;
    return res;
  }
}
