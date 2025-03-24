import {useState} from 'react';

function Contador(){
    const [count, setCount]=useState<number>(0);
    return (
        <div>
            <p>Contagem: {count}</p>
            <button onClick={()=> setCount(count+1)}> +1 </button>
        </div>
    );
}
export default Contador;
// useState permite mudar valores