import './Slider.css'

const SliderComponent=()=>{
    return <div>
      <div className="news-update-container">
            <div className="news-update">
                <div className="image-section">
                    <img 
                        src="path/to/your/image/lemon-whole.jpg" 
                        alt="Whole lemons"
                        className="whole-lemons"
                    />
                    <img 
                        src="path/to/your/image/lemon-cake.jpg" 
                        alt="Lemon cake"
                        className="lemon-cake"
                    />
                </div>
                <div className="text-section">
                    <div className="trending">Trending</div>
                    <h2 className="title">
                        Cake meme reflects coronavirus absurdity in a world where nothing is what it seems
                    </h2>
                    <p className="description">
                        Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme: "Is this real or is this cake?"
                    </p>
                    <div className="author-time">
                        <span>2 hours ago</span>
                        <span>by Lucy Hickston</span>
                        <span>4 min read</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default SliderComponent;