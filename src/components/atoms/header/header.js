import React from 'react'

function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50 h-16">
        <div className="flex justify-start items-center">
            <span className="p-1 font-semibold whitespace-nowrap dark:text-white">Chatbot</span>
        </div>
    </nav>
  )
}

export default Header