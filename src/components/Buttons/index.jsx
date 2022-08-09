import { useDispatch } from "react-redux";
import { subNumber, addNumber } from "../../store/modules/counter/actions";
import "./styles.css";

function Buttons() {
  const dispatch = useDispatch();
  return (
    <div className="container--buttons">
      <button
        onClick={() => {
          dispatch(addNumber(1));
        }}
      >
        Adicionar
      </button>
      <button
        onClick={() => {
          dispatch(subNumber(1));
        }}
      >
        Subtrair
      </button>
    </div>
  );
}

export default Buttons;
