import { useEffect, useRef, useState } from 'react';
import Footer from '../bases/Footer';
import Coolaboradores from '../sub-components/Colaboradores';
import Conocenos from '../sub-components/Conocenos';
import Enterate from '../sub-components/Enterate';
import SobreNosotros from '../sub-components/SobreNosotros';
import City from '../../assets/images/City.png'
import PapersFront from '../../assets/images/PapersFront.png'


const Index = () => {
  const parallaxRef = useRef(null);
  const enterateRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const enterateSection = enterateRef.current;

      if (enterateSection) {
        const enterateSectionTop = enterateSection.offsetTop;
        const windowHeight = window.innerHeight;
        const targetScrollPosition = enterateSectionTop - windowHeight / 2;
        
        setScrollPosition(targetScrollPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      parallaxRef.current.style.transform = `translateY(${scrollTop * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="parallax-background"
        ref={parallaxRef}
        style={{
          backgroundImage: `url(${City})`,
        }}
      ></div>

      <div className="content">
        <section id="conocenos" className={`section`}>
          <Conocenos />
        </section>
        <section id="sobreNosotros" className={`section`}>
          <SobreNosotros />
        </section>
        <section
          id="enterate"
          className={`section`}
          ref={enterateRef}
        >
          <Enterate />
        </section>
        <section id="colaboradores" className={`section`}>
          <Coolaboradores />
        </section>

      </div>

      <Footer />
    </div>
  );
};




export default Index;
