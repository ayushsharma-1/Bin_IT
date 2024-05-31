<<<<<<< Updated upstream
import Header from "./components/header"
import Footer from "./components/footer"
import ImageSlider from "./components/image-slider"
import CardGrid from "./components/events";
import BackgroundVideo from "./components/ui/bgvideo";
import CreateEvent from "./components/create-event";
import NewsSubscribe from "./components/news-subs";

function App() {
  const images = [
    { src: 'https://picsum.photos/200/300', alt: 'Image 1' },
    { src: 'https://picsum.photos/200/300', alt: 'Image 2' },
    { src: 'https://picsum.photos/200/300', alt: 'Image 3' },
    { src: 'https://picsum.photos/200/300', alt: 'Image 4' },
  ];

  return (
    <>
      <Header />
      <main>
        <BackgroundVideo/>
        <ImageSlider images={images} />
        <CardGrid />
        <CreateEvent/>
        <NewsSubscribe/>
      </main>
      <Footer />
    </>
  )
}

export default App
=======
// import Header from "./components/header"
// import Footer from "./components/footer"
// import ImageSlider from "./components/image-slider"
// import CardGrid from "./components/events";
// import CreateEvent from "./components/create-event";
// import NewsSubscribe from "./components/news-subs";
// import AboutUs from "./components/about-us";
// import News from "./components/news";
// import FeedbackCard from "./components/feedback";

// function App() {
//   const images = [
//     { src: '/img-slide-4.jpg', alt: 'Image 1' },
//     { src: '/img-slide-3.jpg', alt: 'Image 2' },
//     { src: '/img-slide-2.jpeg', alt: 'Image 3' },
//     { src: '/img-slide-1.jpeg', alt: 'Image 4' },
//   ];

//   const captions = [
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     'Yeah Finally Did this also'
//   ];

//   return (
//     <>
//       <Header />
//       <main>
//         <ImageSlider images={images} captions={captions} />
//         <AboutUs />
//         <News />
//         <CardGrid />
//         <CreateEvent />
//         <FeedbackCard />
//         <NewsSubscribe />
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import ImageSlider from "./components/image-slider";
import CardGrid from "./components/events";
import CreateEvent from "./components/create-event";
import NewsSubscribe from "./components/news-subs";
import AboutUs from "./components/about-us";
import News from "./components/news";
import FeedbackCard from "./components/feedback";
import About from "./components/about";

function App() {
    const images = [
        { src: '/img-slide-4.jpg', alt: 'Image 1' },
        { src: '/img-slide-3.jpg', alt: 'Image 2' },
        { src: '/img-slide-2.jpeg', alt: 'Image 3' },
        { src: '/img-slide-1.jpeg', alt: 'Image 4' },
    ];

    const captions = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Yeah Finally Did this also'
    ];

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <ImageSlider images={images} captions={captions} />
                            <AboutUs />
                            <News />
                            <CardGrid />
                            <CreateEvent />
                            <FeedbackCard />
                            <NewsSubscribe />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
>>>>>>> Stashed changes
