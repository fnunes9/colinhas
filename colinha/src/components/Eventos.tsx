
function Botao(){
    const clicado=(event: React.MouseEvent<HTMLButtonElement>)=>{
        alert ("Botão clicado!");
    };
    return <button onClick={clicado}>Clique aqui</button>
} 


export default Botao; 
