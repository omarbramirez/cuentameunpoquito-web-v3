// import BGVideo from '../assets/BGVideo.mp4'
import PlanB from '../assets/PlanB.jpg'
import Menu from './Menu'
import Footer from './Footer'


const Home =()=>{
    return(
        <div className='main'>
        <div className="overlay"></div>
            <img className='background' src={PlanB} alt="Background image" />
            <div className="content">
                <Menu/>
            </div>
            <Footer/>
            </div>
    )
}

export default Home