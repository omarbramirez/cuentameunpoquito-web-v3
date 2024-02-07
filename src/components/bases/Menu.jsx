import { useState } from 'react';
import Arrow from '../../assets/icons/Arrow.svg';
import Close from '../../assets/icons/Close.svg';
import Downarrow from '../../assets/icons/Downarrow.svg';
import Whatsapp from '../../assets/icons/Whatsapp.svg';
import Footer from '../bases/Footer';
const Menu = ({ setPage }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenPressMenu, setIsOpenPressMenu] = useState(false);
  const [isOpenIndexMenu, setIsOpenIndexMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((open) => !open);
    setIsOpenPressMenu(false);
    setIsOpenIndexMenu(false);
  };
  const togglePressSubmenu = () => {
    setIsOpenPressMenu((open) => !open);
  };

  const toggleIndexSubmenu = () => {
    setIsOpenIndexMenu((open) => !open);
  };
  return (
    <>
      <nav className={`dvs-header ${isOpenMenu ? 'is-open' : ''}`}>
        <ul>
          <li className={`menu dvs-header-menuItems-trigger link ${isOpenMenu ? 'is-open' : ''}`} onClick={toggleMenu}>
            {isOpenMenu ? <img className="icons" src={Close} alt="Menu" /> : <img className="icons" src={Arrow} alt="Menu" />}
          </li>
          <li className={`dvs-header-menuItems ${isOpenMenu ? 'is-open' : ''}`}>
            <ul>
            <li className="d-flex align-center wrap">
                <ul>
                  <li className="d-flex align-center wrap link" onClick={() => {setPage(0), toggleMenu()}}>
                  <a href="#conocenos">Inicio</a>
                  </li>
                  <li>
                    <img className="icons" src={Downarrow} alt="Submenu" onClick={toggleIndexSubmenu} />
                  </li>
                </ul>
                <ul className={`press-submenu ${isOpenIndexMenu ? 'is-open' : ''}`}>
                  <li className="d-flex align-center wrap link" onClick={() => {setPage(0), toggleMenu()}}>
                  <a href="#sobreNosotros">Sobre nosotros</a>
                  </li>
                  <li className="d-flex align-center wrap link" onClick={() => {setPage(0), toggleMenu()}}>
                  <a href="#enterate">Entérate</a>
                    
                  </li>
                  <li className="d-flex align-center wrap link" onClick={() => {setPage(0), toggleMenu()}}>
                  <a href="#colaboradores">Colaboradores</a>
                    
                  </li>
                </ul>
              </li>
              <li className="d-flex align-center wrap">
                <ul>
                  <li className="d-flex align-center wrap link" onClick={() => {setPage(1), toggleMenu()}}>
                    Recursos para prensa
                  </li>
                  <li>
                    <img className="icons" src={Downarrow} alt="Submenu" onClick={togglePressSubmenu} />
                  </li>
                </ul>
                <ul className={`press-submenu ${isOpenPressMenu ? 'is-open' : ''}`}>
                  <li className="d-flex align-center wrap link" onClick={() => {setPage(1), toggleMenu()}}>
                  <a href="#convocatoria">Convocatoria</a>
                    
                  </li>
                  <li className="d-flex align-center wrap link" onClick={() => {setPage(1), toggleMenu()}}>
                  <a href="#galeria">Galería</a>
                    
                  </li>
                </ul>
              </li>
              <li className="d-flex align-center wrap link whatsapp">
                    <a href="https://wa.me/593998812708"
                      target="_blank"
                      rel="noreferrer">Contáctanos</a>
                    <a href="https://wa.me/593998812708"
                      target="_blank"
                      rel="noreferrer"><img className="icons whatsapp-icon" src={Whatsapp} alt="Whatsapp" /></a>
                  </li>
            </ul>
          </li>
          <li>
            <Footer/>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
