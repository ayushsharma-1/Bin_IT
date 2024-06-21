import './Subscribe.css'

const Subscribe = () => {
    return (
      <div className="SubscribeContainer">
        <div>
          <h2>Subscribe To Our News Letter</h2>
          <p>Receive our weekly news and updates with new Events and latest news about the World</p>
        </div>
        {/* add onclick function in this button that verifies the email and then sends an email */}
        <div className='Subscribe_Input'>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
        </div>
      </div>
    );
  };
  
  export default Subscribe;
  