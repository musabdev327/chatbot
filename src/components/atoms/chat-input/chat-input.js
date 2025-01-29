import React, { forwardRef, useState } from 'react'

const ChatInput = forwardRef(({ onSendMessage }, ref) => {
    const [input, setInput] = useState('')
  
    const handleSendMessage = () => {
        if (input.trim() === '') {
          return 
        }
        onSendMessage(input) 
        setInput('') 
    }
  
    return (
      <div className="relative flex items-center w-full">
        <textarea
          ref={ref}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow pl-3 pr-12 py-2 border rounded-lg focus:ring-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full hover:bg-white hover:text-black w-8 h-8 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    ) 
})

export default ChatInput
