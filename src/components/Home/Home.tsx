import './App.css';
import Contador from '../Contador';

export default function Home() {

	return (
		<section> 

			<h1> Bem-Vindo ao Projeto Ybyrá! </h1>
      		<Contador /> <br /><br /><br />

      		<div>
				<p> O projeto Ybyrá visa, enquanto solução aos problemas ambientais da cidade, a conexão direta entre os cidadãos de São Paulo e organizações sem fins lucrativos cujos objetivos são, conjuntamente, a arborização da cidade, através de um site que permita a publicação das localidades públicas e a consequente interação das ONGs parceiras verdejando e cuidando desses espaços, para que juntos possamos transformar as ruas da metrópole num lugar mais limpo, sustentável, verde e agradável. </p>
			</div>

			<img src={require('./arvoresYbyra.png')} />

		</section>
		
	);
 }
