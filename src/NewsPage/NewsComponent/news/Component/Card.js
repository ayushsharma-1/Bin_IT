// CardComponent.jsx
import './Card.css';
import SvgIcon1 from './SvgIcon1'
import SvgIcon2 from './SvgIcon2'
import SvgIcon3 from './SvgIcon3'

const CardComponent = ({ imageSrc, title, content, timeStamp, author, readTime, likes, comments, shares }) => {
    return (
        <div className='article'>
            <img src={imageSrc} alt="Article" /> {/* Use the imageSrc prop for the image source */}
            <div>
                <div>
                    <h2>{title}</h2> {/* Use the title prop */}
                    <p>{content}</p> {/* Use the content prop */}
                </div>
                <div className="article-meta-info1">
                    <p className="time-stamp-text-style">{timeStamp}</p> {/* Use the timeStamp prop */}
                    <p className="article-meta-info">By {author}&nbsp; |&nbsp; {readTime} read</p> {/* Use the author and readTime props */}
                </div>
                <div className="article-meta-stats-container">
                    <div className="flex-row-with-content">
                        <SvgIcon1 className="svg-container svg-container-heart" />
                        <p className="text-info-box">{likes}</p> {/* Use the likes prop */}
                    </div>
                    <div className="flex-row-with-content">
                        <SvgIcon2 className="svg-container1 svg-container-share" />
                        {/* {/* <p className="subtle-text-annotation">{comments}</p> /} */}
                    </div>
                    {/* <SvgIcon3 className="svg-container1 svg-container-bookmark" /> */}
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
