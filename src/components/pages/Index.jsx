
import Footer from '../bases/Footer';
import Coolaboradores from '../sub-components/Colaboradores';
import Conocenos from '../sub-components/Conocenos';
import Enterate from '../sub-components/Enterate';
import SobreNosotros from '../sub-components/SobreNosotros';
import City from '../../assets/images/City.png'
import Papers from '../../assets/images/Papers.png'
import PapersFront from '../../assets/images/PapersFront.png'

const Index = () => {
  return (
    <div>

        <div

          style={{
            backgroundImage: `url(${City})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex:'-1'

          }}
          >
          </div>
        <div

          style={{
            backgroundColor: `#1c75bc`,
            height:'100%'
          }}
        >
        </div>
        <div
          style={{
            backgroundImage: `url(${Papers})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: '200vh',
            left: '0',
            zIndex:'-1'
          }}
        >
        </div>

        <section id="conocenos" className={`section`}
        >
          <Conocenos />
        </section>
        <section id="sobreNosotros" className={`section`}>
          <SobreNosotros />
        </section>
        <section id="enterate" className={`section`}>
          <Enterate />
        </section>
        <section id="colaboradores" className={`section`}>
          <Coolaboradores />
        </section>
                <div

          style={{
            backgroundImage: `url(${PapersFront})`,
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        ></div>
            <Footer/>

    </div>
  );
};

export default Index;
