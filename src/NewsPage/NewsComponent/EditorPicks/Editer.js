import EditorCard from "./Component/Card";
import React from 'react';
import './Editor.css';

const EditorPickComponent = () => {
    const editorData = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Title 1',
            description: 'Description 1'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Title 2',
            description: 'Description 2'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Title 3',
            description: 'Description 3'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Title 4',
            description: 'Description 4'
        }
    ];

    return (
        <div>
        <h2>Editor Picks</h2>
        <div className="editor-picks-container">
            {editorData.map((item, index) => (
                <EditorCard
                    key={index}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
        </div>
    );
};

export default EditorPickComponent;