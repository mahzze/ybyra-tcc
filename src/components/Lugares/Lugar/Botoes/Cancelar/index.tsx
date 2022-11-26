type Params = {
  logradouro: string,
  numero: number
}

const Cancelar = ({ logradouro, numero }: Params) => {

  const cancelarLocal = (logradouro: string, numero: number) => {
    return
  }

  return (
    <button
      onClick={() => cancelarLocal(logradouro, numero)}
      className="cancelar"
    >
      Cancelar
    </button>
  )
}

export default Cancelar;
