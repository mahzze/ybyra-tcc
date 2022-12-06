import './styles.css'
import ReactDOM from 'react-dom';

type Params = {
  isOpen: boolean,
  close: () => void,
  clique: () => void
}

const portal = document.getElementById("root");

const FormFinalizar = ({ isOpen, close, clique }: Params) => {
  if (!isOpen) return <></>;// o fragment só tá aí pra impedir que dê erro de tipagem na Finalizar/index

  return ReactDOM.createPortal(
    <section className="overlay">
      <section className="form">

        <section className="botoes">
          <button className="finalizar" onClick={clique}>Finalizar</button>
          <button className="cancelar" onClick={close}>Cancelar</button>
        </section>
      </section>
    </section>
    , portal!)
}

export default FormFinalizar;
