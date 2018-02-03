function MaiorEMenor() {

    var menor;
    var maior;

    var clazz = {

        encontra : function(nums) {

            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;

            nums.forEach(function(num) {
                if(num < menor) menor = num;
                //else if(num > maior) maior = num; //o else causará um bug
                if(num > maior) maior = num; //o else causará um bug
            });
        },

        pegaMenor : function() { return menor; },
        pegaMaior : function() { return maior; }
    };

    return clazz;
}