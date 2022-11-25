import './styles.css'

type lugar = {
  logradouro: string,
  numero: number,
  ongSelecionada: string | null,
  arvoresPlantadas: number | null,
  cep: string
}

const Lugar = (lugar: lugar) => {
  return (
    <section className="lugar">
      {lugar.logradouro}
      {lugar.numero}
      {lugar.ongSelecionada}
      {lugar.arvoresPlantadas}
      {lugar.cep}
    </section>
  )
}

export default Lugar;
