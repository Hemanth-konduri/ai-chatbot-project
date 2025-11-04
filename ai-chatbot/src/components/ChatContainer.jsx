import { useState, useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import Header from './Header'
import Sidebar from './Sidebar'
import AuthModal from './AuthModal'

const ChatContainer = () => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState('')
  const [showAuthModal, setShowAuthModal] = useState(false)

  // UI state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Chat state
  const [chats, setChats] = useState([])
  const [currentChatId, setCurrentChatId] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  
  const messagesEndRef = useRef(null)

  // Initialize from localStorage
  useEffect(() => {
    const savedAuth = localStorage.getItem('chatbot_auth')
    const savedChats = localStorage.getItem('chatbot_chats')
    const savedCurrentChatId = localStorage.getItem('chatbot_current_chat')

    if (savedAuth) {
      const authData = JSON.parse(savedAuth)
      setIsAuthenticated(authData.isAuthenticated)
      setUserName(authData.userName)
    }

    if (savedChats) {
      const parsedChats = JSON.parse(savedChats)
      setChats(parsedChats)
      
      if (savedCurrentChatId && parsedChats.find(c => c.id === savedCurrentChatId)) {
        setCurrentChatId(savedCurrentChatId)
      } else if (parsedChats.length > 0) {
        setCurrentChatId(parsedChats[0].id)
      } else {
        createNewChat()
      }
    } else {
      createNewChat()
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem('chatbot_chats', JSON.stringify(chats))
    }
  }, [chats])

  useEffect(() => {
    if (currentChatId) {
      localStorage.setItem('chatbot_current_chat', currentChatId)
    }
  }, [currentChatId])

  useEffect(() => {
    localStorage.setItem('chatbot_auth', JSON.stringify({ isAuthenticated, userName }))
  }, [isAuthenticated, userName])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chats, currentChatId])

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      messages: [
        {
          id: 1,
          text: "Hello! I'm your AI assistant. How can I help you today?",
          sender: 'bot',
          timestamp: new Date().toISOString()
        }
      ]
    }
    setChats(prev => [newChat, ...prev])
    setCurrentChatId(newChat.id)
    setIsSidebarOpen(false)
  }

  const handleSelectChat = (chatId) => {
    setCurrentChatId(chatId)
    setIsSidebarOpen(false)
  }

  const handleDeleteChat = (chatId) => {
    const updatedChats = chats.filter(chat => chat.id !== chatId)
    setChats(updatedChats)

    if (currentChatId === chatId) {
      if (updatedChats.length > 0) {
        setCurrentChatId(updatedChats[0].id)
      } else {
        createNewChat()
      }
    }
  }

  const handleSendMessage = (text) => {
    if (!text.trim() || !currentChatId) return

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date().toISOString()
    }

    setChats(prev => prev.map(chat => 
      chat.id === currentChatId 
        ? { ...chat, messages: [...chat.messages, userMessage] }
        : chat
    ))

    setIsTyping(true)

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(),
        sender: 'bot',
        timestamp: new Date().toISOString()
      }
      
      setChats(prev => prev.map(chat => 
        chat.id === currentChatId 
          ? { ...chat, messages: [...chat.messages, botResponse] }
          : chat
      ))
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const generateBotResponse = () => {
    const responses = [
      "That's an interesting question! Let me help you with that.",
      "I understand what you're asking. Here's what I think...",
      "Great question! Based on what you've told me, I'd suggest...",
      "I'm here to help! Let me provide you with some information.",
      "Thanks for sharing that. Here's my perspective...",
      "I appreciate your question. Let me break this down for you.",
      "That's a thoughtful inquiry. Here's what I can tell you..."
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleHome = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleShrink = () => {
    setIsMinimized(!isMinimized)
  }

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false)
      setUserName('')
    } else {
      setShowAuthModal(true)
    }
  }

  const handleLogin = (username) => {
    setIsAuthenticated(true)
    setUserName(username)
    setShowAuthModal(false)
  }

  const currentChat = chats.find(chat => chat.id === currentChatId)
  const messages = currentChat?.messages || []

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        chats={chats}
        currentChatId={currentChatId}
        onSelectChat={handleSelectChat}
        onNewChat={createNewChat}
        onDeleteChat={handleDeleteChat}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />

      <div className="flex flex-col h-screen">
        <Header
          onHome={handleHome}
          onShrink={handleShrink}
          isAuthenticated={isAuthenticated}
          onAuthClick={handleAuthClick}
          userName={userName}
        />

        {isMinimized ? (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Chat Minimized</h2>
              <p className="text-gray-600 mb-6">Click the minimize button to restore</p>
              <button
                onClick={handleShrink}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Restore Chat
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full p-4">
            <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">AI Chatbot</h1>
                    <p className="text-gray-600 text-sm mt-1">Your intelligent conversation partner</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-md">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-6 py-3 max-w-md">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="bg-white border-t border-gray-200 p-6">
                <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ChatContainer
