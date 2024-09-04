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

    const saida = nomes.map( (item, index) => <li key={index}>{item}</li>);

    return (
    <div>
      <h3>Exerício 1</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" value={nome} onChange={(e)=>setNome(e.target.value)} />
        <button onClick={()=>save()}>Salvar</button>
      </div>
      <div>Nome : {nome}</div>
      <ol>{saida}</ol>
    </div>
  );
}

export default App;
