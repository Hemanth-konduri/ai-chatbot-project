# 🚀 Quick Start Guide

## Get Up and Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd ai-chatbot
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:5173`

---

## 🎉 You're Ready!

The chatbot will open with:
- A welcome message from the AI
- A clean, modern interface
- All features ready to use

## 🎮 Try These Features

### 1️⃣ Send a Message
Type anything in the input box and press **Enter** or click **Send**

### 2️⃣ Open Chat History
Click the **Home** button (top-left) to see the sidebar

### 3️⃣ Create New Chat
Click **"New Chat"** in the sidebar

### 4️⃣ Login
Click **Login** (top-right) and enter:
- Username: `demo` (or anything)
- Password: `1234` (or any 4+ characters)

### 5️⃣ Minimize
Click the **Minimize** button to collapse the chat

### 6️⃣ Delete a Chat
Open sidebar, hover over any chat, click the 🗑️ icon

---

## 📱 Mobile Testing

On mobile devices:
1. Open the same URL on your phone
2. All features work with touch
3. Sidebar slides in smoothly
4. Fully responsive design

---

## 🛠️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy!

---

## 📚 Need More Help?

- **Features**: See [FEATURES.md](./FEATURES.md)
- **User Guide**: See [USAGE_GUIDE.md](./USAGE_GUIDE.md)
- **Technical Details**: See [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)

---

## 🎨 What You'll See

### Main Interface
- Beautiful gradient background
- Clean white chat container
- Smooth animations
- Professional typography

### Header Bar
- Home button with icon
- Minimize button with icon
- User profile (when logged in)
- Login/Logout button

### Chat Area
- Bot messages on the left (gray bubbles)
- Your messages on the right (blue gradient bubbles)
- Typing indicator with animated dots
- Timestamps on all messages
- Avatar icons for user and bot

### Sidebar
- Slides in from the left
- Shows all your conversations
- "New Chat" button at the top
- Delete button on each chat (hover to see)
- Shows date and message count

### Login Modal
- Centered on screen
- Blurred backdrop
- Username and password fields
- Validation messages
- Beautiful gradient button

---

## ✨ Pro Tips

1. **Keyboard Shortcuts**: Press Enter to send messages quickly
2. **Multiple Chats**: Keep different topics in separate chats
3. **Quick Switch**: Use Home button to jump between conversations
4. **Clean Up**: Delete old chats you don't need anymore
5. **Minimize**: Keep chat accessible but out of the way when busy

---

## 🎯 Everything Works Offline!

All your chats are saved in your browser's localStorage, so:
- ✅ No internet needed after loading
- ✅ Chats persist across sessions
- ✅ Fast and responsive
- ✅ Privacy-friendly (data stays local)

---

## 🚨 Troubleshooting

### Port Already in Use?
```bash
# Kill the process on port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### Build Errors?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Chats Not Saving?
- Check if browser allows localStorage
- Try in incognito mode to test
- Clear browser cache and reload

---

## 🎊 Enjoy Your AI Chatbot!

You now have a fully-featured, beautiful chatbot with:
- ✅ Modern UI
- ✅ Chat history
- ✅ Authentication
- ✅ Persistent storage
- ✅ Responsive design
- ✅ Professional animations

**Happy Chatting! 💬**
