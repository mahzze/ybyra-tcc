type Params = {
  logradouro: string,
  numero: number
}

const Finalizar = ({ logradouro, numero }: Params) => {

  const finalizarLocal = (logradouro: string, numero: number) => {
    return
  }

  return (
    <button
      onClick={() => finalizarLocal(logradouro, numero)}
      className="finalizar"
    >
      Finalizar
    </button>
  )
}

export default Finalizar;
