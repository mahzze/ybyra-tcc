type Params = {
  logradouro: string,
  numero: number
}

const Aceitar = ({ logradouro, numero }: Params) => {

  const aceitarLocal = (logradouro: string, numero: number) => {
    return
  }

  return (
    <button
      onClick={() => aceitarLocal(logradouro, numero)}
      className="aceitar"
    >
      Aceitar
    </button>
  )
}

export default Aceitar;
