import React from 'react';
import Card from '../ui/cards';
import '../css/events.css';
import ButtonSVG from '../ui/know-more-btn';

function CardGrid() {
    const cardsData = [
        { id: 1, title: 'Card 1', imgSrc: 'https://picsum.photos/200/300' },
        { id: 2, title: 'Card 2', imgSrc: 'https://picsum.photos/200/300' },
        { id: 3, title: 'Card 3', imgSrc: 'https://picsum.photos/200/300' },
        { id: 1, title: 'Card 1', imgSrc: 'https://picsum.photos/200/300' },
        { id: 2, title: 'Card 2', imgSrc: 'https://picsum.photos/200/300' },
        { id: 3, title: 'Card 3', imgSrc: 'https://picsum.photos/200/300' }
    ];

    return (
        <>
            <div className="events">
                <div className="events-title">
                    LATEST EVENTS
                </div>
                <div className="card-grid">
                    {cardsData.map(card => (
                        <Card key={card.id} title={card.title} imgSrc={card.imgSrc} />
                    ))}
                </div>
                <ButtonSVG/>
            </div>
        </>
    );
}

export default CardGrid;