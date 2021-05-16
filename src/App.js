import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [ count, setCount] = useState(0)
  const increment =()=>{
    localStorage.setItem("count",count + 1)
    setCount(count + 1)
  }
  const decrement =()=>{
    localStorage.setItem("count",count - 1)
    setCount(count - 1)
  }

  // 初回レンダリング時にlocalStorageの値をcountにセット
useEffect(()=>{
  // localStorageは文字列なので、数値に変換する必要がある。
  setCount(Number(localStorage.getItem("count")))
},[])
console.log(localStorage.getItem("count"))
console.log("count", count)

  return (
    <div className="App">
      <div className="count-area">
        <p className="count">{count}</p>
      </div>
      <div className="increment" onClick={()=>increment()}>＋</div>
      <div className="decrement" onClick={()=>decrement()}>-</div>
    </div>
  );
}

export default App;
