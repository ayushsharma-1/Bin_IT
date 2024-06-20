import React from 'react';
import ImageSlider from './image-slider';
import AboutUs from './about-us';
import Details from './ui/Details';
import Feature from './feature';
import Journey from './journey';

const About = () => {
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

    const detailData = [
        {
            title: 'OPPORTUNITY STATEMENT',
            paragraph: "In today's world, pollution looms as an ever-growing menace, casting a shadow over communities and ecosystems globally. Yet, in many places, its presence has become so ingrained that residents feel resigned to its effects, unable to effectuate significant change. <br/><br/> This sense of helplessness fosters a culture of acceptance, perpetuating environmental degradation and impeding the pursuit of cleaner, healthier living environments for all. Amidst these challenges, the normalization of pollution poses a significant barrier to meaningful action and progress. As communities become accustomed to polluted surroundings, the urgency to address this pressing issue diminishes, resulting in a lack of concerted efforts towards mitigation and prevention. Consequently, the cycle of environmental degradation continues unabated, jeopardizing the well-being of both current and future generations.",
            imageSrc: '/content-pic1.png',
        },
        {
            title: 'SOLUTION STATEMENT',
            paragraph: "BinIT's solution involves a multifaceted approach aimed at revolutionizing pollution control and fostering greater environmental stewardship. At the core of our strategy is the enhancement of our platform into a comprehensive and centralized hub for addressing both land and water pollution. This revamped platform will serve as a user-friendly interface, empowering individuals and communities to report pollution incidents swiftly and accurately.<br/><br/>To achieve this, BinIT will leverage advanced technologies such as artificial intelligence and machine learning algorithms. These tools will enable automated analysis of pollution data, allowing for rapid identification and categorization of pollution incidents. Additionally, our platform will utilize geospatial mapping capabilities to pinpoint the precise location of pollution hotspots, facilitating targeted intervention strategies.<br/><br/> In addition to reporting capabilities, BinIT will provide users with access to a wealth of resources and insights aimed at supporting environmental conservation efforts. This includes educational materials on pollution prevention and mitigation strategies, as well as real-time updates on pollution trends and developments. By equipping users with the knowledge and tools they need to combat pollution effectively, BinIT aims to empower individuals and communities to take proactive steps towards a cleaner, greener world.<br/><br/>       Furthermore, BinIT will foster greater collaboration and collective action through its platform. Users will have the opportunity to connect with like-minded individuals and organizations, enabling the formation of partnerships and alliances dedicated to addressing environmental challenges. Through shared expertise and resources, these collaborative efforts will amplify the impact of pollution control initiatives, driving meaningful progress towards a more sustainable future.<br/><br/>Overall, BinIT's solution represents a pioneering approach to pollution control, harnessing the power of technology and community engagement to create positive environmental change. By providing a centralized platform for reporting, analysis, and collaboration, BinIT aims to empower individuals and communities to play an active role in protecting our planet for future generations.",
            imageSrc: '/content-pic2.png',
        },
        {
            title:'OUR VISION',
            paragraph:"At the heart of our vision lies a world where pollution is minimized, and environmental stewardship takes center stage in our collective consciousness. We envision a future where every individual recognizes their role in pollution control, understanding the profound impact their actions have on the health of our planet. Through this heightened awareness and sense of responsibility, we aspire to cultivate a global community dedicated to sustainable living and environmental preservation.<br/><br/>In our envisioned future, environmental stewardship transcends borders and boundaries, uniting people from all walks of life in a shared commitment to safeguarding our planet. Together, we harness the power of collective action to implement innovative solutions and drive positive change on a global scale. By fostering collaboration and cooperation, we empower individuals to take ownership of their environmental footprint, catalyzing a shift towards more sustainable practices and behaviors.<br/><br/>Ultimately, our vision is one of hope and possibility, where the values of environmental responsibility and sustainable living are ingrained in our daily lives and embedded in the fabric of society. Through our collective efforts, we strive to create a world where the health of our planet is preserved for future generations to enjoy, ensuring a legacy of prosperity and well-being for all.",
            imageSrc:'/content-pic3.jpg',
        },
    ];

    return (
        <>
            <ImageSlider images={images} captions={captions} />
            <AboutUs />
            <Feature />
            {detailData.map((detail, index) => (
                <Details
                    key={index}
                    title={detail.title}
                    paragraph={detail.paragraph}
                    imageSrc={detail.imageSrc}
                />
            ))}
            <Journey />
        </>
    );
};

export default About;