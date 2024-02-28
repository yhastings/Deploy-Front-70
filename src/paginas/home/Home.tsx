import { Link } from 'react-router-dom';
import homeLogo from '../../assets/img/casa.png'
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';
import ModalPostagens from '../../componentes/postagens/modalPostagens/ModalPostagens';
function Home(){
    
    return(
       <>
            <div className="bg-indigo-900 flex justify-center">
                    <div className="container grid grid-cols-2 text-white">
                        <div className="flex flex-col gap-4  items-center justify-center py-4">
                            <h2 className="text-5xl font-bold">Seja bem-vinde!</h2>
                            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
                            <div className="flex justify-around gap-4">
                                <ModalPostagens />
                                <Link to='/postagens'className="rounded bg-white text-blue-800 py-2 px-4">Ver postagens</Link>
                            </div>
                        </div>
                            <div className="flex justify-center">
                                <img src={homeLogo} alt="casa" className='w-2/3' />
                            </div>
                    </div>
            </div>
            <ListaPostagens/>
      </>
    );
}
export default Home;