export function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment() { return ++count; },
    decrement() { return --count; },
    reset()     { count = 0; return count; },
    getCount()  { return count; },
  };
}

export function getStatus(count) {
  if (count > 0) return `Позитивне число ✅`;
  if (count < 0) return `Від'ємне число ❌`;
  return `Нуль 🟡`;
}