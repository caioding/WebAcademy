const { calculateTotalPrice } = require("../validations");

describe("calculateTotalPrice", () => {
  it("Deve retornar o valor total de todos os produtos", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 2 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];
    expect(calculateTotalPrice(products)).toBe(70);
  });

  it("deve retornar 0 se a entrada for uma lista vazia", () => {
    expect(calculateTotalPrice([])).toBe(0);
  });

  it("deve lançar um erro se o preço do produto ou a quantidade não for um número", () => {
    const products = [
      { name: "Product 1", price: "10", quantity: 2 },
      { name: "Product 2", price: 15, quantity: "2" },
    ];
    expect(() => calculateTotalPrice(products)).toThrow();
  });

  it("should throw an error if the input is null or undefined", () => {
    expect(() => calculateTotalPrice(null)).toThrow();
    expect(() => calculateTotalPrice(undefined)).toThrow();
  });

  it("deve lançar um erro se o objeto do produto não tiver propriedades 'price' ou 'quantity'", () => {
    const products = [
      { name: "Product 1", quantity: 2 },
      { name: "Product 2", price: 15 },
    ];
    expect(() => calculateTotalPrice(products)).toThrow();
  });
});
