import { useState } from "react";
import Pokemon from "./components/Pokemon";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <h1>ランダムにポケモンを取得</h1>
      {
        visible 
          ? <>
            <Pokemon />
            <button onClick={() => setVisible(false)}>ポケモンの取得をやめる</button>
          </>
          : <p>ポケモンの取得を終了しました</p>
      }
    </div>
  );
}

export default App;