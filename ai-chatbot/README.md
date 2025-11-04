# AI Chatbot Project

A beautiful, modern AI chatbot built with React.js, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, gradient-based UI design
- 💬 Real-time chat interface
- ⌨️ Smooth typing indicators
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Clean component architecture

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
│   │   ├── ChatContainer.jsx    # Main chat container
│   │   ├── ChatMessage.jsx      # Individual message component
│   │   └── ChatInput.jsx        # Message input component
│   ├── App.jsx                  # Root component
│   ├── App.css                  # App styles
│   ├── index.css                # Global styles with Tailwind
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── dist/                        # Production build
└── package.json                 # Dependencies
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
The main container that manages the chat state, messages, and handles user interactions.

### ChatMessage
Displays individual messages with different styling for user and bot messages.

### ChatInput
Input field with send button for users to type and send messages.

## Customization

### Colors
The app uses Tailwind's gradient utilities. You can customize colors in the component files:
- Bot messages: `from-indigo-500 to-purple-600`
- User messages: `from-blue-500 to-cyan-600`
- Background: `from-blue-50 via-indigo-50 to-purple-50`

### Bot Responses
Edit the `generateBotResponse()` function in `ChatContainer.jsx` to customize bot responses or integrate with a real AI API.

## Future Enhancements

- [ ] Integration with OpenAI or other AI APIs
- [ ] Message persistence (localStorage/database)
- [ ] User authentication
- [ ] Multiple chat sessions
- [ ] File/image sharing
- [ ] Voice input/output
- [ ] Dark mode

## License

MIT
