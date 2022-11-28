import Axios from 'axios';
import { useEffect, useState } from 'react';

const Contador = () => {

  const [count, setCount] = useState(0);

  Axios.defaults.withCredentials = true;

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
