const { firstName } = require("../validations");

describe("firstName", () => {
  it("deve retornar o primeiro nome de uma string de nome completo", () => {
    expect(firstName("Caio Cesar")).toBe("Caio");
  });

  it("deve retornar o nome completo se nenhum espaço em branco for encontrado", () => {
    expect(firstName("Caio")).toBe("Caio");
  });

  it("deve retornar uma string vazia se a entrada for uma string vazia", () => {
    expect(firstName("")).toBe("");
  });

  it("deve lançar um erro se a entrada for nula", () => {
    expect(() => firstName(null)).toThrow();
  });
});
