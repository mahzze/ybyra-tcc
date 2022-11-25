import Axios from 'axios';
import { useEffect, useState } from 'react';

const Contador = () => {

  Axios.defaults.withCredentials = true;

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Essa requisição não está passando da query, embora a query esteja certa
    Axios.get("http://localhost:3001/contar").then((response) => {
      setCount(response.data.result);
    });
  }, [])

  return (
    <section>
      {count} árvores plantadas!
    </section>
  )
}

export default Contador;
