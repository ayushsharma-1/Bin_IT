import React from 'react';
import './Editor.css';

const EditorCard = ({ imageUrl, title, description }) => {
    return (
        <div className="editor-pick-card">
            <img src={imageUrl} alt="Editor's Pick" />
            <div className="editor-article-meta-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EditorCard;