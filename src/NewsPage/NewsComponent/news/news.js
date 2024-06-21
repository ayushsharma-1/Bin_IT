import CardComponent from "./Component/Card";
import './news.css'

const NewsComponent=()=>{
  const articles= [
    {
        imageSrc: 'https://img.freepik.com/free-psd/important-announcement-social-media-post-with-megaphone-3d_47987-20456.jpg',
        title: 'Article 1',
        content: 'Content of Article 1',
        timeStamp: '4 hours ago',
        author: 'Caroline Casey',
        readTime: '4min',
        likes: 28,
        comments: 72,
        shares: 5
    },
    {
      imageSrc: 'https://img.freepik.com/free-psd/important-announcement-social-media-post-with-megaphone-3d_47987-20456.jpg',
        title: 'Article 1',
        content: 'Content of Article 1',
        timeStamp: '4 hours ago',
        author: 'Caroline Casey',
        readTime: '4min',
        likes: 28,
        comments: 72,
        shares: 5
    },
    {
      imageSrc: 'https://img.freepik.com/free-psd/important-announcement-social-media-post-with-megaphone-3d_47987-20456.jpg',
        title: 'Article 1',
        content: 'Content of Article 1',
        timeStamp: '4 hours ago',
        author: 'Caroline Casey',
        readTime: '4min',
        likes: 28,
        comments: 72,
        shares: 5
    },
    {
      imageSrc: 'https://img.freepik.com/free-psd/important-announcement-social-media-post-with-megaphone-3d_47987-20456.jpg',
        title: 'Article 1',
        content: 'Content of Article 1',
        timeStamp: '4 hours ago',
        author: 'Caroline Casey',
        readTime: '4min',
        likes: 28,
        comments: 72,
        shares: 5
    },
    {
      imageSrc: 'https://img.freepik.com/free-psd/important-announcement-social-media-post-with-megaphone-3d_47987-20456.jpg',
        title: 'Article 1',
        content: 'Content of Article 1',
        timeStamp: '4 hours ago',
        author: 'Caroline Casey',
        readTime: '4min',
        likes: 28,
        comments: 72,
        shares: 5
    },
    {
      imageSrc: 'https://img.freepik.com/free-psd/important-announcement-social-media-post-with-megaphone-3d_47987-20456.jpg',
        title: 'Article 1',
        content: 'Content of Article 1',
        timeStamp: '4 hours ago',
        author: 'Caroline Casey',
        readTime: '4min',
        likes: 28,
        comments: 72,
        shares: 5
    },
    
];

return <div>
 <div className="card-container">
                {articles.map((article, index) => (
                    <CardComponent
                        key={index}
                        imageSrc={article.imageSrc}
                        title={article.title}
                        content={article.content}
                        timeStamp={article.timeStamp}
                        author={article.author}
                        readTime={article.readTime}
                        likes={article.likes}
                        comments={article.comments}
                        shares={article.shares}
                    />
                ))}
            </div>
            <button className="View-More">View More</button>
</div>
}
export default NewsComponent;