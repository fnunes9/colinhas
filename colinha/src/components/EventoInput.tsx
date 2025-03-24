function Input(){
    const troca=(event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log("Valor digitado", event.target.value);
    };
    return < input type="text" onChange={troca}/>;
}

export default Input;