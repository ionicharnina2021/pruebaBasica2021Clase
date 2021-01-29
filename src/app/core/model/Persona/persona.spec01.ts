import { Persona } from './persona';
//Un describre para toda la clase
describe('test persona',()=>{
    //describes para cada tipo de pruebas que quiero pasar
    describe("prueba edad persona", () => {
        it('retorna la edad',()=>{
            let persona=new Persona('Nicolas','Molina',24,800);
            expect(persona.getAgeInYears(11)).toEqual(34);
        })
        it('should return "20" years', () => {
            let person = new Persona('Nicolas', 'Molina', 20,800);
            let age = person.getAgeInYears(0);
            expect(age).toEqual(210);
        });
    });
    describe('test del nombre',()=>{
        it('nombre completo',()=>{
            let person = new Persona('Nicolas', 'Molina', 24,800);
            expect(person.getFullName()).toBe('Nicolas Molina');
        })
    })
});
