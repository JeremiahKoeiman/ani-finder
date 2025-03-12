// source: https://gist.github.com/dscheerens/8791470290d2a051934fb45890b23601
const GLOBAL_MEMOIZATION_MAP = new WeakMap<object, Map<string, unknown>>();

/**
 * A decorator function that memoizes the result of a getter method.
 *
 * This decorator can be applied to a getter method to cache its result.
 * The cached result will be returned on subsequent calls, avoiding
 * the need to recompute the value.
 *
 * @param target - The prototype of the class containing the getter method.
 * @param propertyKey - The name of the property for which the getter method is defined.
 * @param descriptor - The property descriptor for the getter method.
 * @returns The modified property descriptor with a memoizing getter.
 *
 * @throws {Error} If the decorator is applied to a property that does not have a getter method.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function Memoize<T extends { constructor: Function }>(
  target: T,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalGet = descriptor.get;

  if (!originalGet) {
    throw new Error(
      `Cannot apply @Memoize decorator to '${target.constructor.name}.${propertyKey}' since it has no get accessor`
    );
  }

  return {
    ...descriptor,
    get(this: object): unknown {
      let localMemoizationMap = GLOBAL_MEMOIZATION_MAP.get(this);
      if (!localMemoizationMap) {
        localMemoizationMap = new Map<string, unknown>();
        GLOBAL_MEMOIZATION_MAP.set(this, localMemoizationMap);
      }

      if (localMemoizationMap.has(propertyKey)) {
        return localMemoizationMap.get(propertyKey);
      }

      const value = originalGet.call(this);

      localMemoizationMap.set(propertyKey, value);

      return value;
    },
  };
}
