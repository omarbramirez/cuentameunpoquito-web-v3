import { useState } from 'react'
import Arrow from '../assets/icons/Arrow.svg'

const Menu =({setCurrentModuleIndex})=>{
    const[isOpenMenu, setIsOpenMenu] =useState(false);
    const toggleMenu = ()=>{
        setIsOpenMenu((open)=> !open)
    }
    return(
        <nav className={`dvs-header`}>
 <li className="dvs-header-menuItems-trigger link" onClick={toggleMenu}><img className="icons" src={Arrow} alt="Menu" /></li>
            <li className={`dvs-header-menuItems ${isOpenMenu ? "is-open" : ""}`}>
                <ul>
                    <li className="d-flex align-center wrap link" onClick={()=>{setCurrentModuleIndex(1);}}>
                        Convocatoria
                    </li>
                </ul>
            </li>
        </nav>
    )
}

export default Menu