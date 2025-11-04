const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot'
  
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className={`flex items-start space-x-3 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow-md flex-shrink-0 ${
        isBot 
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
          : 'bg-gradient-to-br from-blue-500 to-cyan-600'
      }`}>
        {isBot ? 'AI' : 'U'}
      </div>
      
      <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} max-w-md`}>
        <div className={`rounded-2xl px-6 py-3 shadow-sm ${
          isBot 
            ? 'bg-gray-100 text-gray-800 rounded-tl-sm' 
            : 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-tr-sm'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <span className="text-xs text-gray-400 mt-1 px-2">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  )
}

export default ChatMessage
