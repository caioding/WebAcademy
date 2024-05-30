const { verifyStockAvailability } = require("../validations");

describe("verifyStockAvailability", () => {
  it("deve retornar verdadeiro se a quantidade desejada do tipo de produto especificado estiver disponível em estoque", () => {
    expect(verifyStockAvailability("laptop", 5)).toBe(true);
  });

  it("deve retornar falso se a quantidade desejada do tipo de produto especificado não estiver disponível em estoque", () => {
    expect(verifyStockAvailability("book", 1)).toBe(false);
  });
  it("deve retornar verdadeiro se a quantidade desejada do tipo de produto especificado for exatamente igual à disponível em estoque", () => {
    expect(verifyStockAvailability("laptop", 10)).toBe(true);
  });

  it("deve retornar falso se o tipo de produto não existir no estoque", () => {
    expect(verifyStockAvailability("nonexistent", 1)).toBe(false);
  });
});
