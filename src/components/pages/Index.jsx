
import Footer from '../bases/Footer';
import Coolaboradores from '../sub-components/Colaboradores';
import Conocenos from '../sub-components/Conocenos';
import Enterate from '../sub-components/Enterate';
import SobreNosotros from '../sub-components/SobreNosotros';
import City from '../../assets/images/City.png'
import Papers from '../../assets/images/Papers.png'
import PapersFront from '../../assets/images/PapersFront.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Index = () => {
  return (
    <div >
      <Parallax pages={7.9} style={{ left: 0, top: 0 }}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2.5}
          style={{
            backgroundImage: `url(${City})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={0}
          factor={3.5}
          style={{
            backgroundColor: `#1c75bc`,
            height:'100%'
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={3.5}
          style={{
            backgroundImage: `url(${Papers})`,
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />
<ParallaxLayer>

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
          </ParallaxLayer>
                <ParallaxLayer
          offset={2}
          speed={0.7}
          factor={3.5}
          style={{
            backgroundImage: `url(${PapersFront})`,
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />
      </Parallax>
      <Footer customization={'parallax'}/>
    </div>
  );
};

export default Index;
