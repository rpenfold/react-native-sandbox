type obj = Record<string, unknown>;

export default function deepEqual(a: obj, b: obj) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key in a) {
    const a_value = a[key];
    const b_value = b[key];

    if ((a_value instanceof Object && !deepEqual(a_value as obj, b_value as obj))
      || (!(a_value instanceof Object) && a_value !== b_value)
    ) {
      return false;
    }
  }

  return true;
}