import React from 'react'
import ChatBubble from '../../atoms/chat-bubble/chat-bubble'

function ChatMessages({ messages }) {
    return (
        <div className="grid grid-cols-12 gap-y-2 px-2">
          {messages.map((message, index) =>
            <ChatBubble key={index} role={message.role} content={message.content.map(block => block.text).join('\n')} />
          )}
        </div>
    )
}

export default ChatMessages