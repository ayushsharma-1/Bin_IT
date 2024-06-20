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
import About from "../src/jsx/about";
import Header from '../src/jsx/header';
import Footer from '../src/jsx/footer';
import ImageSlider from '../src/jsx/image-slider';
import AboutUs from '../src/jsx/about-us';
import News from '../src/jsx/news';
import CardGrid from '../src/jsx/events';
import CreateEvent from '../src/jsx/create-event';
import FeedbackCard from '../src/jsx/feedback';
import NewsSubscribe from '../src/jsx/news-subs';
import Login from '../src/jsx/login';
import SignUp from '../src/jsx/signup';
import Faqs from '../src/jsx/faqs';

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
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/faqs" element={<Faqs />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;


{/* <Route path="/sign" element={<SignUp />} /> */}