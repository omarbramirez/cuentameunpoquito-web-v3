import Background from '../assets/Background.mp4'

const Welcome = () => {
    return (
        <>
         <div className="overlay"></div>
            {/* <video className='background' src={Background} autoPlay loop muted/> */}
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
        </>
    )
}

export default Welcome
