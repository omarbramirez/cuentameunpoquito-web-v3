import Example from '../../assets/images/Example.jpg';

const Coolaboradores = () => {
  return (
    <>
      <div className={`container`}>

        <h1>Talleristas</h1>
        <ul><li>

          <img src={Example} alt="profile" className={`img`} id={`sandraa`} />
        </li>
          <li>
            <strong>Sandra Araya:</strong> Editora y escritora.
          </li>
          <li>
          <img src={Example} alt="profile" className={`img`} id={`sandradelat`} />
          </li>
          <li>
            <strong>Sandra de la Torre Guarderas:</strong> Poeta, editora,
            guionista y realizadora audiovisual.
          </li>
          <li>
          <img src={Example} alt="profile" className={`img`} id={`diegoc`} />
          </li>
          <li>
            <strong>Diego Chamorro:</strong> Director de la Escuela de Pensamiento
            Crítico “Las babas del diablo”.
          </li>
          <li>
          <img src={Example} alt="profile" className={`img`} id={`marcelar`} />
          </li>
          <li>
            <strong>Marcela Ribadeneira:</strong> Escritora, periodista, crítica
            de cine y artista visual.
          </li>
          <li>
          <img src={Example} alt="profile" className={`img`} id={`pamelar`} />
          </li>
          <li>
            <strong>Pamela Ríos:</strong> Librera independiente.
          </li>
          <li>
          <img src={Example} alt="profile" className={`img`} id={`estebanm`} />
          </li>
          <li>
            <strong>Esteban Mayorga:</strong> Investigador y docente.
          </li>
          <li>
          <img src={Example} alt="profile" className={`img`} id={`marialuza`} />
          </li>
          <li>
            <strong>Marialuz Albuja Bayas:</strong> Escritora.
          </li>
          <li>
          <img src={Example} alt="profile" className={`img`} id={`mattiast`} />
          </li>
          <li>
            <strong>Mattias Tello:</strong> Docente, escritor y editor.
          </li>
        </ul>
      </div>
    </>
  )
}

export default Coolaboradores