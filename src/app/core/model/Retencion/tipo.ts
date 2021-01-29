import { Tramo } from "./tramo";

export class Tipos {
  constructor(
    private seguridadSocial: number,
    private sindicatos: number,
    private tramos: Array<Tramo>
  ) {}

  public getRetenciones(baseRetencion: number): number {
    let impuestospoTramo = 0;
    this.tramos.forEach((element) => {
      impuestospoTramo += element.calculaImpuestosTramo(baseRetencion);
    });
    return impuestospoTramo;
  }
  getBaseRetencion(salarioBruto: number): number {
    let salarioSinSS = salarioBruto - this.seguridadSocial;
    return salarioSinSS - (salarioSinSS * this.sindicatos) / 100;
  }

  public getSalarioNeto(salarioBruto: number): number {
    let baseRetencion = this.getBaseRetencion(salarioBruto);
    let retencionesPorTramo= this.getRetenciones(baseRetencion);
    return baseRetencion-retencionesPorTramo;
  }
}
