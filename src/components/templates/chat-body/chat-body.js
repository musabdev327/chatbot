import React from 'react' 
import ChatMessages from '../../molecules/chat-message/chat-message' 
import ChatInput from '../../atoms/chat-input/chat-input' 

function MainSection({ messages, handleSendMessage, inputFieldRef, messagesEndRef }) {
    return (
        <main className="p-4 md:ml-64 pt-20 dark:text-white h-screen">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full py-2 px-4">
                <div className="h-full overflow-x-auto mb-6">
                    <ChatMessages messages={messages} />
                    <div ref={messagesEndRef} />
                </div>
                <ChatInput onSendMessage={handleSendMessage} ref={inputFieldRef} />
            </div>
        </main>
    ) 
}

export default MainSection
