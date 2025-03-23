 // Awrrow function: troca function por const e return por =>
 function soma(a,b){
    return a+b;
}

const soma = (a,b)=> a+b;

 // _____________________________________________________

  // Desestruturação de arrays e objetos - Destructuring

  const [a,b]=[1,2]; //arrays a=1 b=2

  const pessoa={nome:'Fernanda', idade:25};
  const {nome, idade}=pessoa; // nome fernanda idade 25 OBJETO


// _____________________________________________________

// Template Literals (Template strings) ${} - ao invés de concatenar string 
const nome2 ='Fernanda';
const idade2=25;
const mensagem=`Oi, meu nome é ${nome} e tenho %{idade} anos`;
console.log(mensagem);

// _____________________________________________________

// Default Parameters (Parâmetros padrão) - deixa claro que a função tem um valor padrão

function saudacao(nome='visitante'){
    return `olá ${nome}`;
}
console.log(saudacao()); // Olá visitante
console.log(saudacao('Fernanda'));// olá fernanda

// _____________________________________________________

// Spread Operator (...) -- combinar ou copiar objetos e arrays de maneira simples

//arrays
const arr1=[1,2,3];
const arr2=[...arr1,4,5,6]; // combina o arr1 com os novos elementos
console.log(arr2) // imprime 1,2,3,4,5,6

//objetos
const pessoaw={nome:'Fernanda', idade:25};
const pessoaComEndereco={...pessoaw, endereco:'rUA 1'};
console.log(pessoaComEndereco); // imprime pessoaw+endereco

//add item sem modificar o original
const newUser={id:3, name:"Carla"};
const updateUser=[...users, newUser];

// atualizar item 
const modifiedUsers=users.map(user=>
    user.id===2?{...user, name:"Pedro Silva"}: user
);

//removendo ITEM
const filterdUsers=users.filter(user=> user.id !==1);

// _____________________________________________________

// Let e Const

let x=10; //pode ser reatribuido
const y =15; // nao pode ser reatribuido

x=15;//ok
y=20;// erro

// objetos imutáveis 
const users=[{id:1, name:"Fernanda"}, {id:2, name:"Nunes"}];
// _____________________________________________________


// MAP -> Transforma cada item de um array e retorna um novo array
// FILTER -> filtra itens de um array
// REDUCE -> reduz um array em um único valor

const numeros=[1,2,3,4,5];

const dobrar = numeros.map(num=>num*2); // saída 2,4,6,8,10

const evento=numeros.filter(num= num%2 ===0); // saída 2,4

const soma=numeros.reduce((acc,num)=> acc+num,0); // retorna a soma de todos os numeros 15

// _____________________________________________________

// PROMISES E ASYNC/AWAIT chamar api -- consumindo 

//chamando api com then()

fetch("https://jsonplaceholder.typicoee.com/users")
    .then(response=> response.json())
    .then(data=> console.log(data))
    .catch(error=> console.error(error));

// chamando api com async/await

async function Users() {
    try{
        const resposta = await fetch ("https://jsonplaceholder.typicoee.com/users");
        const dados = await resposta.json();
        console.log(dados);        
    } catch (error){
        console.error(error);
    }
}
Users();
// _____________________________________________________

//import export

export function SayHello(nome){
    return `Oi ${nome}`;
}

// importando em outro arquivo
import{SayHello} from "caminho_do_arquivo";
console.log(SayHello("react"));