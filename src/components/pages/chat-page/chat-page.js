import React, { useState, useCallback, useEffect, useRef } from 'react' 
import Header from '../../atoms/header/header'
import Sidebar from '../../molecules/side-bar/side-bar'
import MainSection from '../../templates/chat-body/chat-body'

function ChatPage() {
  const [chatId, setChatId] = useState(null) 
  const [messages, setMessages] = useState([]) 
  const messagesEndRef = useRef(null) 
  const inputFieldRef = useRef(null) 

  useEffect(() => {
    inputFieldRef.current.focus() 
  }, []) 

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) 
    }, 100) 
  }

  const sendMessage = useCallback(async(message) => {
    try {
        const response = await fetch('http://localhost:8000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
            mode: 'cors'
        }) 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.response; 
    } catch (error) {
        console.error('Error sending message:', error) 
    }}, [])

    const handleSendMessage = useCallback(async (input) => {
        const newMessage = { role: "user", content: [{ text: input }] } 
        setMessages([...messages, newMessage]) 
        scrollToBottom()

        const botResponse = await sendMessage(input)
        if (botResponse) {
            setMessages([...messages, newMessage, { role: "bot", content: [{ text: botResponse }] }])
            scrollToBottom()
        }
    }, [messages, sendMessage])

  const newChat = useCallback(() => {
    setChatId(null) 
    setMessages([]) 
    inputFieldRef.current.focus() 
  }, [])

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <Header />

        <Sidebar chatId={chatId} newChat={newChat} />

        <MainSection
            messages={messages} 
            handleSendMessage={handleSendMessage} 
            inputFieldRef={inputFieldRef} 
            messagesEndRef={messagesEndRef} 
        />
    </div>
  ) 
}

export default ChatPage 