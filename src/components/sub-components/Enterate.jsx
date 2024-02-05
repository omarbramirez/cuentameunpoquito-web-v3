import PaperBackground from '../../assets/images/BackgroundPaper.png'; 

const Enterate = () => {
    return (
        <>
            <div className={`container`}>
      <p style={{
            backgroundImage: `url(${PaperBackground})`,
            backgroundSize: 'fill',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            padding: '5rem 1rem',
            color: '#3c3c3b'
          }}
          >
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
      </>
    )
}

export default Enterate
