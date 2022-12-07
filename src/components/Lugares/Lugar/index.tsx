import './styles.css';
import lugar from '../lugarType';
import Aceitar from './Botoes/Aceitar';
import Cancelar from './Botoes/Cancelar';
import Finalizar from './Botoes/Finalizar';

const Lugar = ({ logradouro, numero, ongSelecionada, arvoresPlantadas }: lugar) => {
  if (ongSelecionada == null) ongSelecionada = "N/a";
  if (arvoresPlantadas == null) arvoresPlantadas = 0;

  return (
    <section className="lugar">
      <div className="info">{logradouro}</div>
      <div className="info">{numero}</div>
      <div className="info">{ongSelecionada}</div>
      <div className="info">{arvoresPlantadas}</div>
      <div className="botoesWrapper">
        {
          ongSelecionada === "N/a"
            ? (
              <>
                <Aceitar
                  logradouro={logradouro}
                  numero={numero}
                />
                <Cancelar
                  logradouro={logradouro}
                  numero={numero}
                />
              </>
            )
            : (
              arvoresPlantadas === 0
                ? (
                  <>
                    <Finalizar
                      logradouro={logradouro}
                      numero={numero}
                    />
                    <Cancelar
                      logradouro={logradouro}
                      numero={numero}
                    />
                  </>
                )
                : (
                  <div className="concluido">CONCLUIDO</div>
                )
            )
        }
      </div>
    </section>
  )
}

export default Lugar;
