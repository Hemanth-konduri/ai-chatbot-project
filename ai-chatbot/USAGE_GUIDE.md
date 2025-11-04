# AI Chatbot - Usage Guide

## 🎯 Quick Start

### Running the Application

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Feature Walkthrough

### 1. **First Time Setup**

When you first open the chatbot:
- A default chat session is automatically created
- You'll see a welcome message from the AI assistant
- The interface is ready to use immediately

### 2. **Sending Messages**

- Type your message in the input field at the bottom
- Press **Enter** or click the **Send** button
- The bot will respond after a brief typing animation
- All messages are automatically saved

### 3. **Managing Chat History**

#### Opening the Sidebar
- Click the **Home** button in the top-left corner
- The sidebar slides in from the left
- You'll see all your previous conversations

#### Creating a New Chat
- Click the **"New Chat"** button in the sidebar
- A fresh conversation starts immediately
- The previous chat is saved automatically

#### Switching Between Chats
- Click on any chat in the sidebar
- The conversation loads instantly
- Your current position is saved

#### Deleting a Chat
- Hover over any chat in the sidebar
- Click the **trash icon** that appears
- The chat is permanently deleted
- If you delete the current chat, you'll be switched to another one

### 4. **Authentication**

#### Logging In
1. Click the **Login** button in the top-right corner
2. Enter any username (e.g., "John")
3. Enter a password (minimum 4 characters)
4. Click **Sign In**
5. Your profile appears in the header

#### Logging Out
- Click the **Logout** button when authenticated
- Your session ends immediately
- Chat history is preserved

### 5. **Minimizing the Chat**

- Click the **Minimize** button in the header
- The chat collapses to a minimized view
- Click **Restore Chat** to expand it again
- Useful when you need to focus on other tasks

### 6. **Keyboard Shortcuts**

- **Enter**: Send message
- **Shift + Enter**: New line in message (if implemented)
- **Escape**: Close modals and sidebar

## 🎨 UI Elements Explained

### Header Bar
```
[Home] [Minimize]                    [User Profile] [Login/Logout]
```

### Sidebar Structure
```
┌─────────────────────────┐
│  Chat History      [X]  │
├─────────────────────────┤
│  [+ New Chat]           │
├─────────────────────────┤
│  ┌─────────────────┐    │
│  │ Chat Preview    │🗑️  │
│  │ Today • 5 msgs  │    │
│  └─────────────────┘    │
│  ┌─────────────────┐    │
│  │ Another Chat    │🗑️  │
│  │ Yesterday • 3   │    │
│  └─────────────────┘    │
└─────────────────────────┘
```

### Chat Interface
```
┌─────────────────────────────────┐
│  AI Chatbot              [●]    │
│  Your intelligent partner       │
├─────────────────────────────────┤
│                                 │
│  [AI] Hello! How can I help?    │
│                                 │
│       [U] I need assistance     │
│                                 │
│  [AI] I'm here to help!         │
│                                 │
├─────────────────────────────────┤
│  [Type your message...] [Send]  │
└─────────────────────────────────┘
```

## 💡 Tips & Tricks

1. **Multiple Conversations**: Keep different topics in separate chats for better organization

2. **Quick Access**: Use the Home button to quickly switch between conversations

3. **Clean Workspace**: Delete old chats you no longer need to keep things tidy

4. **Minimize When Busy**: Use the minimize feature to keep the chat accessible but out of the way

5. **Persistent Storage**: Your chats are saved in your browser's localStorage, so they persist across sessions

## 🔧 Troubleshooting

### Chat history not saving?
- Check if your browser allows localStorage
- Try clearing browser cache and reloading

### Sidebar not opening?
- Click the Home button again
- Check browser console for errors

### Messages not sending?
- Ensure you've typed something in the input field
- Wait for the bot to finish typing before sending another message

## 🌐 Browser Compatibility

Works best on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📱 Mobile Usage

On mobile devices:
- Tap the Home button to open sidebar
- Swipe or tap outside sidebar to close it
- All features work the same as desktop
- Optimized for touch interactions

## 🎓 Advanced Features

### LocalStorage Structure

The app stores data in three keys:
- `chatbot_auth`: Authentication state
- `chatbot_chats`: All chat conversations
- `chatbot_current_chat`: Currently active chat ID

### Clearing All Data

To reset the app completely:
```javascript
// Open browser console and run:
localStorage.removeItem('chatbot_auth')
localStorage.removeItem('chatbot_chats')
localStorage.removeItem('chatbot_current_chat')
// Then reload the page
```

## 🚀 Next Steps

This is a demo chatbot with mock responses. To make it production-ready:

1. Connect to a real AI API (OpenAI, Anthropic, etc.)
2. Implement real authentication backend
3. Add message search functionality
4. Export/import chat history
5. Add file upload support
6. Implement voice input/output
7. Add chat sharing capabilities
8. Multi-language support

Enjoy your AI Chatbot! 🎉
