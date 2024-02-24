// import Example from '../../assets/images/Default.png';

import Abril from '../../assets/images/talleristas/abril.png';
import Sandra from '../../assets/images/talleristas/sandra.png';
import Diego from '../../assets/images/talleristas/diego.png';
import Pamela from '../../assets/images/talleristas/pamela.png';
import Esteban from '../../assets/images/talleristas/esteban.png';
import Mattias from '../../assets/images/talleristas/mattias.png';
import Eduardo from '../../assets/images/talleristas/eduardo.png';
import Marcelo from '../../assets/images/talleristas/marcelo.png';
import Fer from '../../assets/images/talleristas/fer.png';



const Coolaboradores = () => {
  return (
    <>
      <div className={`container`}>

        <h1>Talleristas</h1>
        <ul>
          <li>

          <img src={Abril} alt="profile" className={`img-profile`}   />
        </li>
          <li>
            <strong>Abril Altamirano:</strong> Editora y escritora.
          </li>
          <li>

<img src={Sandra} alt="profile" className={`img-profile`}   />
</li>
<li>
  <strong>Sandra Araya:</strong> Editora y escritora.
</li>

          {/* <li>
          <img src={Example} alt="profile" className={`img`} id={`sandradelat`} />
          </li>
          <li>
            <strong>Sandra de la Torre Guarderas:</strong> Poeta, editora,
            guionista y realizadora audiovisual.
          </li> */}
          <li>
          <img src={Diego} alt="profile" className={`img-profile`} />
          </li>
          <li>
            <strong>Diego Chamorro:</strong> Director de la Escuela de Pensamiento
            Crítico “Las babas del diablo”.
          </li>
          {/* <li>
          <img src={Example} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Marcela Ribadeneira:</strong> Escritora, periodista, crítica
            de cine y artista visual.
          </li> */}
          <li>
          <img src={Pamela} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Pamela Ríos:</strong> Librera independiente.
          </li>
          <li>
          <img src={Esteban} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Esteban Mayorga:</strong> Investigador y docente.
          </li>
          {/* <li>
          <img src={Example} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Marialuz Albuja Bayas:</strong> Escritora.
          </li> */}
          <li>
          <img src={Mattias} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Mattias Tello:</strong> Docente, escritor y editor.
          </li>
          <li>
          <img src={Eduardo} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Eduardo Varas</strong>
          </li>
          <li>
          <img src={Marcelo} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Marcelo Cruz</strong>
          </li>
          <li>
          <img src={Fer} alt="profile" className={`img-profile`}  />
          </li>
          <li>
            <strong>Fer Mejía</strong>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Coolaboradores
