import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Modal from './components/Modal';
import './App.css';

import Registro from './components/Registro/Registro';

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
 
	return (
	  <div className="App">
		 <nav className="navbar navbar-light bg-light ps-4 pe-4">
			<section className="container-fluid">
			<BrowserRouter>
				<nav>
					<ul><li><Link to="/Registro">Registro</Link></li></ul>
				</nav>
			
				<Routes>
          			<Route path="/Registro" element={<Registro />} />
        		</Routes>
			</BrowserRouter>
			
			  	<span className="navbar-brand mb-0 p-3">Ybyrá</span>
			  	<article>
			  		É uma boa ideia colocar uma imagem de uma arvore com um filtro verde escuro de plano de fundo na navbar
			  	</article>
			  	<button type="button" className="navbar-toggler btn btn-primary" onClick={() => setIsModalOpen(true)}>
					<span className="navbar-toggler-icon"></span>
			  	</button>
			</section>
		 </nav>
		<AnimatePresence
			initial={false}
			exitBeforeEnter={true}
			onExitComplete={() => null}
		>
			{isModalOpen && 
			<Modal 
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>}
		</AnimatePresence>
	  </div>
	);
 }
