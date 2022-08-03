import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import FormModal from '../../FormModal';
import ONGRegistro from './ongs';
import PessoaRegistro from './pessoas';

const Formulario = () => {
  const [user, setUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <>
    <AnimatePresence
      initial={true}
      exitBeforeEnter={true}
      onExitComplete={() => null }
    >
      { isModalOpen &&
      <FormModal 
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        user={user} 
        setUser={setUser}
      />
      }
    </AnimatePresence>
      {user ==="ONG"? <ONGRegistro/> : <PessoaRegistro/>}
    </>
  )

}
export default Formulario; 