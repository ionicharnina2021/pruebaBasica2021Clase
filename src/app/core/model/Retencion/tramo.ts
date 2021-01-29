import { Intervalo } from './intervalo';
export class Tramo{
   
    constructor(private intervalo:Intervalo,
        private tipo:number){
    }

    calculaImpuestosTramo(sueldo: number) {
        if(sueldo<this.intervalo.minimo){
            return 0;
        }
        let diferencia=sueldo-this.intervalo.maximo;
        let base=this.intervalo.maximo;
        if(diferencia<0){
            base+=diferencia;
        }
        return (base-this.intervalo.minimo)*this.tipo/100;
      }
}