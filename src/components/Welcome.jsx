import Background from '../assets/Background.mp4'

const Welcome = () => {
    return (
        <div>
         <div className="overlay"></div>
            <video
                className='background'
                autoPlay={true}
                loop={true}
                controls={false}
                playsInline
                muted
                src={Background}
                type="video/mp4"
            />
        </div>
    )
}

export default Welcome
