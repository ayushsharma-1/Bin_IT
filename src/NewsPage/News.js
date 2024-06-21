import HeaderComponent from "./NewsComponent/Header/Header";
import SliderComponent from "./NewsComponent/Slider/Slider";
import NewsComponent from "./NewsComponent/news/news";
import EditorPickComponent from "./NewsComponent/EditorPicks/Editer";
import SubscribeComponent from "./NewsComponent/Subscribe/Subscribe";
import FooterComponents from "./NewsComponent/footer/Footer";
import './News.css';
const NewsPage=()=>{
    return (
        <div className="NewsPage">
        <div className="NewsPage-Header">
         <HeaderComponent />
        </div>
        <div className="NewsPage-Items">
         <SliderComponent />
         <NewsComponent />
         <EditorPickComponent />
         </div>
         <SubscribeComponent />
         <FooterComponents />
        
        </div>
    );
}
export default NewsPage;