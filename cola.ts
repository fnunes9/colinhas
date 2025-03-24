// como declarar variáveis
let nome: string ="Fernanda";
let idade: number=25;
let ativo:boolean=true;

let qualquer:any="pode ser qualquer coisa";
let desconhecido: unknown=123; // mais seguro do que o any
// _____________________________________________________

// objetos
const user:{nome:string; idade:number}={
    nome: "Fernanda",
    idade: 25
};
// _____________________________________________________
//interface
interface User{
    name:string;
    age:number;
}
const user2:User={name:"fiona", age:30};
// _____________________________________________________
// extendendo
interface Person{
    name:string;
}

interface Funcionario extends Person{
    funcao:string
}
const funcionario:Funcionario={name:"Pedro", funcao:"Atendente"}; //props
// _____________________________________________________

// tipagem função

function some(a:number, b:number): number{
    return a+b;
}

const multiplica=(a:number, b:number): number => a*b;

//parametro opcional

function saudacao(nome:string, sobrenome?:string){
    return `Olá, ${nome} ${sobrenome||""}`;
}
// _____________________________________________________
// genericos cria funções e tipos flexíveis T

function primeiroElemento<T>(array:T[]): T{
    return array[0];
}
const numeros=primeiroElemento([1,2,3]); // retorna number
const textos = primeiroElemento(["a","b","c"]) // retorna string

// promise 
async function buscarDados<T>():Promise<T> {
    const resposta=await fetch ("https://api.example.com/data");
    return resposta.json();
}
// _____________________________________________________
// união | e interceção &
 
let idade1: number | string;
idade1 = 25;
idade1="vinte e cinco";

interface Pessoa{
    nome:string;
}

interface Funcionario2{
    cargo:string;
}

const colaborador:Pessoa & Funcionario2={
    nome: "fernanda",
    cargo:"dev"
};