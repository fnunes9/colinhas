//executa quando o componente monta, atualiza ou desmonta --> ideal pra chamar api
import {useEffect, useState} from 'react';

function FetchData(){
    const[usuarios, setUsuarios]=useState<string[]>([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data=> setUsuarios(data.map((usuario:any)=> usuario.name)));
    }, []); //montagem
    return <ul>
        {usuarios.map(usuario=><li key={usuario}>{usuario}</li>)}
    </ul>
}

export default FetchData;