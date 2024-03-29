// import { useState, useEffect } from "react"
import { useState} from "react"
import Header from './sub-components/Header'
import Footer from './bases/Footer'
import Welcome from './Welcome'
import Home from './Home'


const Start = () => {

    // const currentModule = localStorage.getItem('initialization') || false
    // const [initialization, setInitialization] = useState(currentModule)
    const [initialization, setInitialization] = useState(false)

    // useEffect(()=>{
    //     localStorage.setItem('initialization', initialization.toString())
    // }, [initialization])
  
    return (
        <div className={`main`}>
            {initialization ? <Home key={`Convocatoria`}/> : <Welcome key={`Welcome`} className={`welcome`}/>}
            <div className={`content start-content ${initialization ? 'is-initialized': ''}`}>
            <Header setInitialization={setInitialization} initialization={initialization}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Start