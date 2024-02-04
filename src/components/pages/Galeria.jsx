import { useEffect, useState } from 'react';
import Image2 from '../../assets/images/recursos-para-prensa.jpg'; 
import Image3 from '../../assets/images/recursos-para-prensa1.jpg'; 
import Image4 from '../../assets/images/recursos-para-prensa2.jpg'; 
import Image5 from '../../assets/images/recursos-para-prensa3.jpg'; 
import Image6 from '../../assets/images/recursos-para-prensa4.jpg'; 

const Galeria = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePaths = [Image2,Image3,Image4,Image5,Image6];
    setImages(imagePaths);
  }, []);

  return (
    <div id={`galeria`}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className='gallery-img'/>
      ))}
    </div>
  );
};

export default Galeria;
