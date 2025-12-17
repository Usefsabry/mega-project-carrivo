import React, { useState, useEffect, useRef } from 'react';
import chatbotIcon from '../../assets/images/chatbot.png';
import botAvatar from '../../assets/images/Group.png';
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // User Avatar (Placeholder SVG)
    const userAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // Simple default user avatar

    // Welcome message when chatbot opens for the first time
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const welcomeMessage = {
                id: Date.now(),
                text: "Hi! I'm your Carrivo Assistant. 👋\n\nI'm here to help you discover the career path that fits you best. How can I guide you today?",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([welcomeMessage]);
        }
    }, [isOpen, messages.length]);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Simulate bot typing
        setTimeout(() => {
            const botMessage = {
                id: Date.now() + 1,
                text: "Thanks for your message! The Chatbot will be connected to the API soon to provide accurate answers. 🚀",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);

        // TODO: Replace with actual API call
        // const response = await fetch('YOUR_API_ENDPOINT', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ message: inputValue })
        // });
        // const data = await response.json();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    };

    return (
        <>
            {/* Chatbot Toggle Button */}
            <div
                className={`chatbot-toggle ${isOpen ? 'hidden' : ''}`}
                onClick={toggleChat}
                aria-label="Open Chatbot"
            >
                <img src={chatbotIcon} alt="Chatbot" className="chatbot-toggle-icon" />
                <div className="chatbot-pulse"></div>
            </div>

            {/* Chatbot Window */}
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header-content">
                        <img src={botAvatar} alt="Carrivo Assistant" className="chatbot-avatar" />
                        <div className="chatbot-header-text">
                            <h3>Carrivo Assistant</h3>
                            {/* Removed status dot line to match clean white look if desired, or keep it but change color. Keeping it simple for now. */}
                        </div>
                    </div>
                    <button
                        className="chatbot-close"
                        onClick={toggleChat}
                        aria-label="Close Chatbot"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#00599B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Messages Container */}
                <div className="chatbot-messages">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
                        >
                            <img
                                src={message.sender === 'bot' ? botAvatar : userAvatar}
                                alt={message.sender}
                                className="message-avatar"
                            />
                            <div className="message-content">
                                <p className="message-text">{message.text}</p>
                                {/* Time removed from bubble to match clean look or kept outside? keeping outside for now */}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="chatbot-footer">
                    <form className="chatbot-input-container" onSubmit={handleSendMessage}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="chatbot-input"
                            placeholder="Type a message ..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            type="submit"
                            className="chatbot-send-btn"
                            disabled={!inputValue.trim()}
                            aria-label="Send Message"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#00599B" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && <div className="chatbot-overlay" onClick={toggleChat}></div>}
        </>
    );
};

export default ChatBot;
