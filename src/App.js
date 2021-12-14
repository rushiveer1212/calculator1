import "./styles.css";
import { sum, sub, mult, div } from "./Calc";
export default function App() {
  return (
    <div className="App">
      <>
        <ul>
          <li> sum of two no is {sum(40, 4)} </li>
          <li> sum of two no is {sum(40, 4)} </li>
          <li> sum of two no is {mult(40, 4)} </li>
          <li> sum of two no is {div(40, 4)} </li>
        </ul>
      </>
    </div>
  );
}
