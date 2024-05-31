<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import "./css/img-slider.css";

const ImageSlider = ({ images }) => {
=======
// import React, { useState, useEffect } from 'react';
// import "./css/img-slider.css";

// const ImageSlider = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(scrollNext, 10000); // Scroll every 10 seconds

//         // Clear the interval when the component unmounts
//         return () => clearInterval(interval);
//     }, [currentIndex]);

//     const scrollNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const scrollPrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     return (
//         <div className="carousel">
//             <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         className="carousel-item"
//                         src={image.src}
//                         alt={image.alt}
//                     />
//                 ))}
//             </div>
//             <button className="prev" onClick={scrollPrev}>❮</button>
//             <button className="next" onClick={scrollNext}>❯</button>
//         </div>
//     );
// };

// export default ImageSlider;


import React, { useState, useEffect } from 'react';
import "./css/img-slider.css";

const ImageSlider = ({ images, captions }) => {
>>>>>>> Stashed changes
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(scrollNext, 10000); // Scroll every 10 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [currentIndex]);

    const scrollNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const scrollPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
<<<<<<< Updated upstream
                    <img
                        key={index}
                        className="carousel-item"
                        src={image.src}
                        alt={image.alt}
                    />
=======
                    <div key={index} className="carousel-item">
                        <p className="carousel-caption">{captions[index]}</p>
                        <img
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
>>>>>>> Stashed changes
                ))}
            </div>
            <button className="prev" onClick={scrollPrev}>❮</button>
            <button className="next" onClick={scrollNext}>❯</button>
        </div>
    );
};

<<<<<<< Updated upstream
export default ImageSlider;
=======
export default ImageSlider;

>>>>>>> Stashed changes
