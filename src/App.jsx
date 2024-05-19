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