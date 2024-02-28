
import Popup from 'reactjs-popup';

import './ModalPostagens.css'
import FormularioPostagens from '../formularioPostagens/FormularioPostagens';

function ModalPostagens() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagens />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagens;