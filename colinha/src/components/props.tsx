interface Props1{
    nome:string;
}
function Saudacao({nome}: Props1){
    return <h2>Oi, {nome}!</h2>;
}

export default Saudacao;

//passa valor para os componentes