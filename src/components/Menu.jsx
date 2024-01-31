import { useState } from "react"
import Arrow from '../assets/icons/Arrow.svg'
import Logo from '../assets/Logo.png'

const Menu =()=>{
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = ()=>{
        setIsOpen((open)=> !open)
    }
    return(
        <nav className="dvs-header">
                    <li><img src={Logo} alt="Logo" /></li>
                    <p>Sitio oficial del festival de microcuentos dirigido a la ciudadanía quiteña para la promoción de la lectura y la escritura sobre la ciudad, el uso de la lengua y la apropiación del espacio público.</p>
                    <li className="dvs-header-menuItems-trigger" onClick={toggleMenu}><img className="icons" src={Arrow} alt="Menu" /></li>
            <li className={`dvs-header-menuItems ${isOpen ? "is-open" : ""}`}>
                <ul>
                    <li className="d-flex align-center wrap">
                        <a href="">Inicio</a>
                    </li>
                </ul>
            </li>
        </nav>
    )
}

export default Menu