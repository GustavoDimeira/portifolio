import { useEffect, useState } from "react"
import "../css/Inicial.css";

export default function Inicial() {
  const [cells, changeCells] = useState([]);

  useEffect(() => {
    const tempCells = [];
    for (let i = 0; i < 1; i ++) tempCells.push(i);

    changeCells(tempCells);
  },[]);

 return(
    <div class="container">
      <div class="box">Box 1</div>
      <div class="box2">Box 2</div>
    </div>
  )
}