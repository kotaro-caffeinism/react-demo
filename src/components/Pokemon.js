import { useState, useEffect } from "react";

export default function Pokemon () {

  const [name, setName] = useState("");
  const [type, setType] = useState("");

  async function fetchData() {
    const random = Math.floor(Math.random() * 248 + 1);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    const obj = await data.json();
    setName(obj.name);
    setType(obj.types[0].type.name);

    // ログ出し
    console.log(obj.name);
  }
  
  useEffect(() => {
    const id = setInterval(() => fetchData(), 3000);
    return () => clearInterval(id);
  }, []);

  return <div>
    <p>ポケモンの名前: {name}</p>
    <p>ポケモンのタイプ: {type}</p>
  </div>
}