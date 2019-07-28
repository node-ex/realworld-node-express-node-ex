/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function inspectObject(obj: any): Map<any, any> {
  const passedObject = obj;
  const inspectionSet = new Map();

  do {
    const propertyKeys = Object.getOwnPropertyNames(obj);
    const symbolKeys = Object.getOwnPropertySymbols(obj);
    let keys: Array<string | symbol> = [];
    keys = keys.concat(propertyKeys);
    keys = keys.concat(symbolKeys);

    for (let key of keys) {
      // key === "readableHighWaterMark"
      let fromPrototype = null;
      // `isPrototypeOf()` on Symbol instances returns false.
      if (
        Object.prototype.isPrototypeOf.call(obj, passedObject) ||
        (typeof passedObject === 'symbol' && typeof obj !== 'symbol')
      ) {
        fromPrototype = obj.constructor.name;
      }

      // Check for null and undefined.
      let valueType = null;
      try {
        if (
          isNullOrUndefined(obj[key]) ||
          isNullOrUndefined(Object.getPrototypeOf(obj[key]))
        ) {
          valueType = obj[key];
        } else {
          valueType = Object.getPrototypeOf(obj[key]).constructor.name;
        }
      } catch (error) {
        if (error instanceof TypeError) {
          valueType = 'unknown';
        } else {
          throw error;
        }
      }

      let isEnumerable = null;
      if (typeof obj !== 'symbol') {
        isEnumerable = Object.prototype.propertyIsEnumerable.call(obj, key);
      } else {
        key = key.toString();
      }

      /* Handle overriden properties, symbols and Object properties of
       * `inspectionSet` variable.
       */
      if (key in inspectionSet) {
        key = `${key.toString()}/${obj.constructor.name}`;
      }
      inspectionSet.set(
        key,
        {
          isEnumerable,
          fromPrototype,
          valueType,
        }
      );
    }
    obj = Object.getPrototypeOf(obj);
  } while (obj);

  return inspectionSet;
}

export function isNullOrUndefined(obj: any): boolean {
  if (obj === null || typeof obj === 'undefined') {
    return true;
  }

  return false;
}
