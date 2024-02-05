import Bird from '../../assets/images/bird.png'; 

const Conocenos = () => {
    return (
        <>
      <div className={`container`}>
        <img src={Bird} alt="bird" className={`img`}/>
    <h2>Objetivo general:</h2>
      <p className='description'>
        Promover la lectura y escritura en y sobre la ciudad, así como la
        valoración y apropiación de la literatura quiteña y el espacio público
        en el Distrito Metropolitano de Quito.
      </p>
      <h2>Objetivos específicos:</h2>
      <ul>
        <li>
          ● Motivar la escritura de narrativa breve en los estudiantes y
          pobladores del Distrito Metropolitano de Quito.
        </li>
        <li>
          ● Revitalizar la tradición de escritura de narrativa breve en el
          Distrito Metropolitano de Quito mediante el diálogo de grupos
          intergeneracionales, diversidades sexo-genéricas y subculturas
          urbanas.
        </li>
        <li>
          ● Difundir la producción literaria de narrativa breve en los
          pobladores del Distrito Metropolitano de Quito.
        </li>
      </ul>
      </div>
      </>
    )
}

export default Conocenos
