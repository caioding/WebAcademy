/**
 * Extracts the first name from a full name string.
 *
 * @param {string} fullName - The full user name separated by blank spaces.
 * @returns {string} - The first name extracted from the full name, or the name itself if no blank space is found.
 */
function firstName(fullName) {
  if (fullName === null || fullName === undefined) {
    throw new Error("Input cannot be null or undefined");
  }

  const blankSpace = fullName.indexOf(" ");

  if (blankSpace === -1) return fullName;
  else return fullName.slice(0, blankSpace);
}

/**
 * Verifies the availability of a product in stock based on its type and desired quantity.
 *
 * @param {string} productType - The type of the product to check for availability.
 * @param {number} qty - The desired quantity of the product to check.
 * @returns {boolean} - Returns true if the desired quantity of the specified product type is available in stock,
 *                      otherwise returns false.
 */
function verifyStockAvailability(productType, qty) {
  if (
    productType === null ||
    productType === undefined ||
    qty === null ||
    qty === undefined
  ) {
    throw new Error("Input cannot be null or undefined");
  }

  if (qty <= 0) {
    return false;
  }

  const stock = {
    laptop: 10,
    smartphone: 20,
    headphone: 5,
    tablet: 15,
    book: 0,
  };

  const availableStock = stock[productType];
  if (availableStock >= qty) return true;
  else return false;
}

/**
 * Calculates the total price of an array of products in an e-commerce application.
 *
 * @param {Array} products - An array of product objects, each containing 'price' and 'quantity' properties.
 * @returns {number} - The total price obtained by multiplying the price of each product by its quantity
 *                    and summing up the individual product prices.
 *
 * Example of products array:
 *   [
 *     { name: 'Product 1', price: 10, quantity: 2 },
 *     { name: 'Product 2', price: 15, quantity: 2 },
 *     { name: 'Product 3', price: 20, quantity: 1 }
 *   ]
 */
function calculateTotalPrice(products) {
  if (products === null || products === undefined) {
    throw new Error("Input cannot be null or undefined");
  }

  let total = 0;

  for (let product of products) {
    if (
      typeof product.price !== "number" ||
      typeof product.quantity !== "number"
    ) {
      throw new Error("Product price and quantity must be a number");
    }

    total += product.price * product.quantity;
  }

  return total;
}

module.exports = { firstName, verifyStockAvailability, calculateTotalPrice };
