# AI Chatbot Project

A beautiful, modern AI chatbot built with React.js, Vite, and Tailwind CSS featuring a complete chat management system with authentication, history, and persistent storage.

## ✨ Features

- 🎨 **Modern UI Design** - Beautiful gradients, animations, and glassmorphism effects
- 💬 **Real-time Chat Interface** - Smooth messaging with typing indicators
- 📚 **Chat History Management** - Create, switch, and delete multiple conversations
- 🔐 **Authentication System** - Login/logout with user profile display
- 💾 **Persistent Storage** - All chats saved to localStorage
- 🏠 **Home Button** - Quick access to chat history sidebar
- 🔽 **Minimize Feature** - Collapse chat window when needed
- 🗑️ **Delete Chats** - Remove unwanted conversations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized with Vite and React 19
- 🎯 **Clean Architecture** - Well-organized component structure

## Tech Stack

- **React.js** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Project Structure

```
ai-chatbot/
├── src/
│   ├── components/
│   │   ├── ChatContainer.jsx    # Main chat container with state management
│   │   ├── ChatMessage.jsx      # Individual message component
│   │   ├── ChatInput.jsx        # Message input component
│   │   ├── Header.jsx           # Navigation header with controls
│   │   ├── Sidebar.jsx          # Chat history sidebar
│   │   └── AuthModal.jsx        # Login/authentication modal
│   ├── App.jsx                  # Root component
│   ├── App.css                  # App styles
│   ├── index.css                # Global styles with Tailwind
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── dist/                        # Production build
├── FEATURES.md                  # Detailed feature documentation
├── USAGE_GUIDE.md              # User guide and instructions
├── IMPLEMENTATION_SUMMARY.md   # Technical implementation details
└── package.json                # Dependencies
```

## Getting Started

### Installation

```bash
cd ai-chatbot
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Components

### ChatContainer
The main container that manages:
- Multiple chat sessions
- Authentication state
- UI state (sidebar, minimize)
- LocalStorage persistence
- Message handling and bot responses

### Header
Navigation bar featuring:
- Home button (toggles sidebar)
- Minimize button (collapses chat)
- User profile display
- Login/Logout button

### Sidebar
Chat history management with:
- List of all conversations
- New chat creation
- Chat switching
- Delete functionality
- Preview and metadata display

### AuthModal
Authentication interface with:
- Username/password form
- Input validation
- Error handling
- Beautiful modal design

### ChatMessage
Displays individual messages with:
- Different styling for user vs bot
- Timestamps
- Avatar icons
- Responsive layout

### ChatInput
Input field with:
- Send button
- Enter key support
- Disabled state during bot typing
- Clean, modern styling

## Customization

### Colors
The app uses Tailwind's gradient utilities. You can customize colors in the component files:
- Bot messages: `from-indigo-500 to-purple-600`
- User messages: `from-blue-500 to-cyan-600`
- Background: `from-blue-50 via-indigo-50 to-purple-50`

### Bot Responses
Edit the `generateBotResponse()` function in `ChatContainer.jsx` to customize bot responses or integrate with a real AI API.

## 📖 Documentation

- **[FEATURES.md](./FEATURES.md)** - Complete list of all features and capabilities
- **[USAGE_GUIDE.md](./USAGE_GUIDE.md)** - Step-by-step user guide with tips and tricks
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Technical details and architecture

## 🎯 How to Use

1. **Start Chatting**: Type a message and press Enter or click Send
2. **Open History**: Click the Home button to view all conversations
3. **New Chat**: Click "New Chat" in the sidebar to start fresh
4. **Switch Chats**: Click any chat in the sidebar to switch to it
5. **Delete Chat**: Hover over a chat and click the trash icon
6. **Login**: Click Login and enter any username with 4+ character password
7. **Minimize**: Click Minimize to collapse the chat window

## 🎨 Customization

### Colors
The app uses a beautiful gradient color scheme:
- **Primary**: Indigo to Purple (`from-indigo-500 to-purple-600`)
- **User Messages**: Blue to Cyan (`from-blue-500 to-cyan-600`)
- **Background**: Soft gradient (`from-blue-50 via-indigo-50 to-purple-50`)

Edit these in the component files to match your brand.

### Bot Responses
Edit the `generateBotResponse()` function in `ChatContainer.jsx` to:
- Add custom responses
- Integrate with real AI APIs (OpenAI, Anthropic, etc.)
- Implement context-aware replies

## ✅ Completed Features

- ✅ Multiple chat sessions
- ✅ Chat history management
- ✅ User authentication UI
- ✅ Persistent storage (localStorage)
- ✅ Sidebar navigation
- ✅ Minimize/restore functionality
- ✅ Delete individual chats
- ✅ Beautiful, modern UI
- ✅ Responsive design
- ✅ Typing indicators
- ✅ Message timestamps

## 🚀 Future Enhancements

- [ ] Integration with real AI APIs (OpenAI, Claude, etc.)
- [ ] Backend database for cloud storage
- [ ] Real authentication with JWT
- [ ] Message search functionality
- [ ] Export chat history
- [ ] File/image sharing
- [ ] Voice input/output
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Chat sharing via links

## License

MIT
