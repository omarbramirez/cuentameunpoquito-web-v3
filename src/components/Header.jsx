import Logo from '../assets/Logo.png'
import Arrow from '../assets/icons/Arrow.svg'

const Header = ({setIsOpen, setCurrentModuleIndex}) => {

    const toggleMenu = ()=>{
        setIsOpen((open)=> !open)
    }

    return (
        <ul className="dvs-header">
            <li className='link'><img src={Logo} alt="Logo" onClick={()=>setCurrentModuleIndex(0)}/></li>
            <li>
                <p>Sitio oficial del festival de microcuentos dirigido a la ciudadanía quiteña para la promoción de la lectura y la escritura sobre la ciudad, el uso de la lengua y la apropiación del espacio público.</p>
            </li>
            <li className="dvs-header-menuItems-trigger link" onClick={toggleMenu}><img className="icons" src={Arrow} alt="Menu" /></li>
        </ul>
    )
}

export default Header
