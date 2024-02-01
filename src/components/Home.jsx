import { useState, useEffect } from "react"
// import PlanB from '../assets/PlanB.jpg'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Convocatoria from './Convocatoria'


const Home = () => {
    const initialSection = localStorage.getItem('currentModuleIndex') || 0;
    const [currentModuleIndex, setCurrentModuleIndex] = useState(parseInt(initialSection));
    const [isOpen, setIsOpen] = useState(false)
  
    useEffect(() => {
      localStorage.setItem('currentModuleIndex', currentModuleIndex.toString());
    }, [currentModuleIndex]);
  

    const modules = [<Welcome key={`Welcome`} className={`welcome`}/>, <Convocatoria key={`Convocatoria`}/>];

    return (
        <div className={`main`}>
            {modules[currentModuleIndex]}
            {/* <div className={`content ${isOpen ? "is-open" : ""}`}> */}
            <div className={`content`}>
            <Header setIsOpen={setIsOpen} setCurrentModuleIndex={setCurrentModuleIndex}/>
                {/* {isOpen ? null : <Header setIsOpen={setIsOpen} setCurrentModuleIndex={setCurrentModuleIndex}/>}
                <Menu setCurrentModuleIndex={setCurrentModuleIndex}/> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home