import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { Theme,EmojiStyle,SkinTones } from 'emoji-picker-react';
// import 'emoji-mart/css/emoji-mart.css';
import './css/Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return; 
        const newMessage = {
            text: inputValue,
            sender: 'You', 
        };
        setMessages([...messages, newMessage]);
        setInputValue('');
    };

    const handleEmojiClick = (emoji) => {
        setInputValue(inputValue + emoji.native);
    };

    return (
        <div className='community-chat'>
            <div className='chat-top'>
                <h2>Team Ganga</h2>
                <p>last seen 45 minutes ago</p>
            </div>
            <div className='chat-messages'>
                {messages.map((message, index) => (
                    <div key={index} className='chat-message'>
                        <p>{message.text}</p>
                        <span>{message.sender}</span>
                    </div>
                ))}
            </div>
            <div className='chat-bottom'>
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
                
                {showEmojiPicker && (
                     <div>
                     <EmojiPicker />
                   </div>
                )}
                <input
                    type='text'
                    placeholder='Type your message...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
               
            </div>
        </div>
    );
};

export default Chat;
