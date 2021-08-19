import { Billetera } from "./billetera";

describe("Billetera", () => {
  const deCueroFlaquita = new Billetera("cuero", [50, 10, 10]);
  const dePapelAbultada = new Billetera("papel", [500, 100, 1000, 20, 20]);

  describe("saldo total", () => {
    it("es la suma de los billetes", () => {
      expect(deCueroFlaquita.saldoTotal()).toBe(70);
    });
  });

  describe("es reciclable", () => {
    it("cuando su material sí lo es", () => {
      expect(dePapelAbultada.esReciclable()).toBeTruthy();
    });

    it("cuando su material no lo es", () => {
      expect(deCueroFlaquita.esReciclable()).toBeFalsy();
    });
  });

  describe("está ordenada", () => {
    it("cuando los billetes están guardados de mayor a menor", () => {
      expect(deCueroFlaquita.estaOrdenada()).toBeTruthy();
    });

    it("cuando los billetes están guardados en otro orden", () => {
      expect(dePapelAbultada.estaOrdenada()).toBeFalsy();
    });
  });
});
