import Logo from '../../assets/Logo.png'
const Header = ({ setInitialization, initialization }) => {
    const toggleInitialization = () => {
        setInitialization((open) => !open)
    }
    return (
        <ul className={`header ${initialization ? "is-initialized" : ""}`}>
            <li><img src={Logo} alt="Logo" /></li>
            <li>
                <p>Sitio oficial del festival de microcuentos dirigido a la ciudadanía quiteña para la promoción de la lectura y la escritura sobre la ciudad, el uso de la lengua y la apropiación del espacio público.</p>
            </li>
            <li className="initialization-trigger link" onClick={toggleInitialization}>
                <h3>
                    Ir al sitio
                </h3>
            </li>
        </ul>
    )
}

export default Header
