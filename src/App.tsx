import { useState } from "react";

function App() {
    const [nome, setNome] = useState("");
    const [nomes, setNomes] = useState<string[]>([]);
  /*  const saida = [];
    for(let i = 0; i < nomes.length; i++){
      saida.push(<li key={i}>{nomes[i]}</li>);
    }*/

    function save(){
      const aux = [...nomes, nome];
      setNomes(aux);
    }

    //const saida = nomes.map( (item, index) => <li key={index}>{item}</li>);

    return (
    <div>
      <h3>Nutritech</h3>
      <div>
        <label htmlFor="name">Usuário:</label>
        <input id="name" value={nome} onChange={(e)=>setNome(e.target.value)} />
        <button onClick={()=>save()}>Salvar</button>
      </div>
      <Output lista={nomes}/>
    </div>
  );
}

export default App;

function Output(props:Props){
  const saida = props.lista.map( (item, index) => <li key={index}>{item}</li>);
  return <ul>{saida}</ul>
}

interface Props{
  lista:string[]
}