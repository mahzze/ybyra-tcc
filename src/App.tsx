import React, { useState } from 'react';

import Modal from './components/Modal'
import './App.css';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false)
 
	return (
	  <div className="App">
		 <nav className="navbar navbar-light bg-light ps-4 pe-4">
			<section className="container-fluid">
			  <span className="navbar-brand mb-0 p-3">Ybyrá</span>
			  <article>
			  É uma boa ideia colocar uma imagem de uma arvore com um filtro verde escuro de plano de fundo na navbar
			  </article>
			  <button type="button" className="navbar-toggler btn btn-primary" onClick={() => setIsModalOpen(true)}>
				 <span className="navbar-toggler-icon"></span>
			  </button>
			</section>
		 </nav>
		 <Modal 
			open={isModalOpen}
			onClose={() => setIsModalOpen(false)}
		 />
	  </div>
	);
 }
 
export default App;
