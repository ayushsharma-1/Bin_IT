import '../css/journey.css'

function Journey() {
    return (
        <>
            <div className="journey">
                <div className="journey-title">
                    JOURNEY
                </div>
                <div className="journey-chart">
                    <div className="above-circle">
                        <div className="text-box">
                            <h3>2023</h3>
                            <h5>Started</h5>
                        </div>
                        <div className="text-box">
                            <h3>2024</h3>
                            <h5>Launched</h5>
                        </div>
                        <div className="text-box">
                            <h3>2025</h3>
                            <h5>100MT Ton Plastic <br />Disposal</h5>
                        </div>
                    </div>
                    <div className="above-stick">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="above-line">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="below-line">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="below-stick">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="below-circle">
                        <div className="text-box">
                            <h3>BinIT Completed</h3>
                            <h5>2024</h5>
                        </div>
                        <div className="text-box">
                            <h3>Commencement of <br /> cleaning events</h3>
                            <h5>2024</h5>
                        </div>
                    </div>
                </div>
                <div className="orgs-slider">
                    <div className="orgs-slider-title">
                        Organization Works With Us
                    </div>
                        <marquee>
                            <img src="/ngo-1.jpg" alt="" />
                            <img src="/ngo-2.jpg" alt="" />
                            <img src="/ngo-3.jpg" alt="" />
                            <img src="/ngo-4.jpg" alt="" />
                            <img src="/ngo-5.png" alt="" />
                            <img src="/ngo-6.jpg" alt="" />
                            <img src="/ngo-7.jpg" alt="" />
                            <img src="/ngo-8.jpg" alt="" />
                            <img src="/ngo-9.jpg" alt="" />
                            <img src="/ngo-10.jpg" alt="" />
                            <img src="/ngo-11.jpg" alt="" />
                    </marquee>
                </div>
            </div>
        </>
    )
}

export default Journey;