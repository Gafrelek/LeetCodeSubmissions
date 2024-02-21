/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
if (Array.isArray(obj)) {
    // If the input is an array, compact each element
    return obj.filter(element => Boolean(element)).map(compactObject);
  } else if (typeof obj === 'object' && obj !== null) {
    // If the input is an object, recursively compact its properties
    const compactedObj = {};
    for (const key in obj) {
      const compactedValue = compactObject(obj[key]);
      if (
        compactedValue !== undefined &&
        compactedValue !== null &&
        compactedValue !== false &&
        compactedValue !== 0 &&
        compactedValue !== ""
      ) {
        // Only add the key-value pair if the compacted value is truthy
        compactedObj[key] = compactedValue;
      }
    }
    return compactedObj;
  } else {
    // For non-object values, return the value itself
    return obj;
  }
};