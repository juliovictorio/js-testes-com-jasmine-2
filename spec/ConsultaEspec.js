describe("Consulta", function() {

    it("nao deve cobrar nada se a consulta for um retorno", function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, [], true, true);

        expect(consulta.preco()).toEqual(0);
    });

    it("deve cobrar 25 por cada procedimento comum", function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it("deve dobrar o preco da consulta particular", function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);

        expect(consulta.preco()).toEqual(50 * 2);
    });

    it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ["raio-x"], true, false);

        expect(consulta.preco()).toEqual(55 * 2);
    });
});