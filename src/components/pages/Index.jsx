import Bird from '../../assets/images/bird.png'; 
import Flower from '../../assets/images/flower.png'
import Image1 from '../../assets/images/recursos-para-prensa5.jpg'; 
const Index = () => {
  return (
    <>
    <section id="conocenos" className={`section`}>
      <div className={`container`}>
        <img src={Bird} alt="bird" className={`img`}/>
    <h2>Objetivo general:</h2>
      <p>
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
      </section>
    <section id="sobreNosotros" className={`section`}>
    <div className={`container`}>
    <p>
        Historias que caben en la palma de la mano, relatos que duran lo que el
        canto de un gorrión, cuentos breves en menos de 150 palabras. Cuéntame
        Un PoQuito es una iniciativa ciudadana que cuenta con el apoyo de la
        Secretaría de Cultura del Municipio de Quito para fomentar la lectura y
        escritura de microcuentos en la población. El proyecto consta de cuatro
        componentes: talleres de lectoescritura para estudiantes de secundaria,
        un concurso de microcuentos abierto a varias edades y categorías, un
        libro que incluirá los relatos ganadores y, finalmente, la instalación
        de murales con textos breves de autores consolidados.
      </p>
    <img src={Flower} alt="flower" className={`img`}/>
      <p>
        Cuéntame un PoQuito es un proyecto que busca fomentar la lectura,
        escritura y aprecio por la literatura en el Distrito Metropolitano de
        Quito, a través de un concurso de microcuento en el que se promueve la
        participación activa de la comunidad Asimismo, pretende incentivar la
        apropiación del espacio público y la revitalización de la tradición
        literaria escrita, además de comprometerse a ser una herramienta que
        permita impulsar la creatividad, el diálogo intergeneracional y la
        diversidad cultural entre la ciudadanía quiteña.
      </p>
</div>
      </section>
      <section id="enterate" className={`section`}>
            <div className={`container`}>
            <img src={Image1} alt="thumbnail" className={`thumbnail`}/>
      <p>
        Cuéntame un PoQuito es un proyecto integral y sostenible que funge como
        referente cultural en el Distrito Metropolitano de Quito al fortalecer
        la conexión entre la literatura y la comunidad. Así, trasciende como una
        iniciativa que, mediante la escritura, la lectura y la intervención de
        espacios públicos, impulsa una transformación positiva en la percepción
        de la literatura quiteña y en la apropiación consciente de los entornos
        urbanos. De este modo, aspira a ser reconocido como un catalizador de la
        creatividad y una parte esencial del ecosistema editorial ecuatoriano,
        contribuyendo activamente al desarrollo de habilidades literarias y al
        fortalecimiento del tejido cultural de la ciudad, así como al
        florecimiento de la cadena del libro en el país.
      </p>
      </div>
      </section>
      <section id="colaboradores" className={`section`}>
      <div className={`container`}>

      <h2>Talleristas</h2>
      <ul>
        <li>
          <strong>Sandra Araya:</strong> Editora y escritora.
        </li>
        <li>
          <strong>Sandra de la Torre Guarderas:</strong> Poeta, editora,
          guionista y realizadora audiovisual.
        </li>
        <li>
          <strong>Diego Chamorro:</strong> Director de la Escuela de Pensamiento
          Crítico “Las babas del diablo”.
        </li>
        <li>
          <strong>Marcela Ribadeneira:</strong> Escritora, periodista, crítica
          de cine y artista visual.
        </li>
        <li>
          <strong>Pamela Ríos:</strong> Librera independiente.
        </li>
        <li>
          <strong>Esteban Mayorga:</strong> Investigador y docente.
        </li>
        <li>
          <strong>Marialuz Albuja Bayas:</strong> Escritora.
        </li>
        <li>
          <strong>Mattias Tello:</strong> Docente, escritor y editor.
        </li>
      </ul>
</div>
      </section>
    </>
  );
};

export default Index;
