# 🤖 Chatbot Frontend (React)
This project is the frontend for the Chatbot API, built with React.js and Tailwind CSS. It provides a user-friendly interface to interact with the chatbot.

---

## 🚀 Features
✅ **React.js** with functional components
✅ **Tailwind CSS** for responsive design
✅ **Chat interface** with smooth scrolling
✅ **API integration** with FastAPI backend
✅ **Modular & reusable** component-based structure

---

## 📂 Project Structure

```
/chatbot-frontend
│── /public                 # Static assets
│── /src                    # Source code
│   │── /components
│   │   │── /atoms          # Small UI elements (buttons, inputs, etc.)
│   │   │── /molecules      # Combined UI elements (chat messages, sidebars)
│   │   │── /pages          # Full-page components (ChatPage)
│   │   │── /templates      # Layout templates
│   │── App.js              # Root component
│   │── index.js            # Entry point
│── package.json            # Dependencies and scripts
│── tailwind.config.js      # Tailwind configuration
│── README.md               # Documentation
```

---

## 🔧 Installation & Setup
### 1️⃣ **Clone the Repository**
```
git clone <repository-url>
cd chatbot
```

### 2️⃣ **Install Dependencies**
```
npm install
```

### 3️⃣ **Start the Frontend**
```
npm start
```
This will start the development server on http://localhost:3000.

---

## 🚀 API Integration
The frontend interacts with the Chatbot API running on http://localhost:8000.

## 💬 Chat API Endpoint
### POST ```/chat```
#### 🔹 Request:
```json
{
  "message": "hello"
}
```

#### 🔹 Response:
```json
{
  "response": "Hi there! Need assistance?"
}
```

---

## 📌 Author
- Developed by **Musab**
- Contact: **musabdev327@gmail.com**