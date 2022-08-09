import { useSelector } from "react-redux";
import "./styles.css";

function Display() {
  const counter = useSelector(({ counter }) => counter);

  return <p className="numer"> {counter}</p>;
}

export default Display;
