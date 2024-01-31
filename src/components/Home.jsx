import BGVideo from '../assets/BGVideo.mp4'
import Menu from './Menu'
import Footer from './Footer'


const Home =()=>{
    return(
        <div className='main'>
        <div className="overlay"></div>
            <video src={BGVideo} autoPlay loop muted></video>
            <div className="content">
                <Menu/>
            </div>
            <Footer/>
            </div>
    )
}

export default Home