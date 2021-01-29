import { Tipos } from "./tipo";
import { Tramo } from "./tramo";
import { Intervalo } from "./intervalo";
//objeto creado por prototipo no permite privatizar las propiedades
// let tipos :Tipos={
//   seguridadSocial: 250,
//   sindicatos: 2,
//   tramos: [
//     new Tramo(new Intervalo(0, 900), 15),
//     new Tramo(new Intervalo(901, 1500), 19),
//     new Tramo(new Intervalo(1501, 5000), 33),
//     new Tramo(new Intervalo(5001, Number.MAX_VALUE), 55),
//   ],
// };
// si usamos instanacion, si
let tipos = new Tipos(250, 2, [
  new Tramo(new Intervalo(0, 900), 15),
  new Tramo(new Intervalo(901, 1500), 19),
  new Tramo(new Intervalo(1501, 5000), 33),
  new Tramo(new Intervalo(5001, Number.MAX_VALUE), 55),
]);

describe("probar el calculo neto", () => {
  it("caso 800", () => {
    /*
      con sueldo bruto de 800 tras retener ss y sindicatos quedan 539
      despues de hacerle las retenciones por tramo quedan 458.15
      */
    expect(tipos.getSalarioNeto(800)).toEqual(450);
  });
  it("caso 1300", () => {
    expect(tipos.getSalarioNeto(1300)).toBeCloseTo(869.49,0)
  });
  it("caso 1600", () => {});
  it("caso 6000", () => {});
});
