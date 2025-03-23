const soma =(b,c)=> b+c;

const pessoa={nome:'Fernanda', idade:25, cidade:'BH'};
const {cidade}=pessoa;

const mensagem=`Oi meus dados são ${pessoa}`;

function mensagem1(nome='Visitante'){
    return `oi ${nome}`;
}
console.log(mensagem1());
console.log(mensagem1('fernanda'));

const numerosPares=[2,4,6,8];
const numerosImpares=[...numerosPares,1,3,5,7,9];
console.log(numerosImpares);
