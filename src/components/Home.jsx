import PlanB from '../assets/PlanB.jpg'
import Background from '../assets/Background.mp4'
import Menu from './Menu'
import Footer from './Footer'


const Home =()=>{
    return(
        <div className='main'>
        <div className="overlay"></div>
            <video className='background' src={Background} autoPlay loop muted/>
            <div className="content">
                <Menu/>
            </div>
            <Footer/>
            </div>
    )
}

export default Home