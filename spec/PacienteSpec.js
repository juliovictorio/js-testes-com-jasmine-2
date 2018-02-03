describe("Paciente", function() {
    
    var guilherme;

    beforeEach(function() {
        //guilherme = new Paciente("Guilherme", 28, 72, 1.82);
        guilherme = new PacienteBuilder().constroi();
    });

    it("deve calcular o IMC", function() {
        expect(guilherme.imc()).toEqual(72 / (1.82*1.82));
    });

    it("deve calcular o IMC 2", function() {
        expect(guilherme.imc()).toEqual(72 / (1.82*1.82));
    });

    it("deve calcular batimentos cardiacos", function() {
        //expect(guilherme.batimentos()).toEqual(28 * 365 * 24 * 60 * 80); Ou...
        expect(guilherme.batimentos()).toEqual(1177344000);
    });
});