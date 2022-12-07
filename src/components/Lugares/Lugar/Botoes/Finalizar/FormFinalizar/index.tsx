import './styles.css'
import ReactDOM from 'react-dom';

type Params = {
  isOpen: boolean,
  close: () => void,
  clique: () => void
}

const portal = document.getElementById("portal");

const FormFinalizar = ({ isOpen, close, clique }: Params) => {
  if (!isOpen) return <div className="ta aqui">AAAAAAAAAA</div>;

  return ReactDOM.createPortal(
    <section className="overlay">
      <section className="form">
        <label>Digite a quantia de árvores plantadas
          <input id="inpArvores" type="number" />
        </label>
        <section className="botoes">
          <button className="finalizar" onClick={clique}>Finalizar</button>
          <button className="cancelar" onClick={close}>Cancelar</button>
        </section>
      </section>
    </section>
    , portal!)
}

export default FormFinalizar;
