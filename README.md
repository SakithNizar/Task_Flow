# 🚀 TaskFlow

**TaskFlow** is a full-stack task management web application built with **MERN** (MongoDB, Express, React, Node.js) and **Google OAuth 2.0** for authentication.
It helps teams or individuals manage tasks with ease by providing CRUD operations, real-time updates, and a clean UI.

---

## 🌐 Live Demo

> Coming soon...

---

## 📸 Screenshots

![Screenshot 2025-05-20 133046](https://github.com/user-attachments/assets/32dfd262-b0d8-444c-bbd0-ec30adfc704d)
![Screenshot 2025-05-20 133058](https://github.com/user-attachments/assets/e1da140d-d923-45d9-bed8-024106a62d9d)
![Screenshot 2025-05-20 133113](https://github.com/user-attachments/assets/a1c6b342-50a5-488e-a918-4e9e26725008)
![Screenshot 2025-05-20 133123](https://github.com/user-attachments/assets/5cf1f9d7-779f-4724-ac95-7a33089e7150)
![Screenshot 2025-05-20 133131](https://github.com/user-attachments/assets/eee61ee1-1d41-419d-b43a-b15664044572)
![Screenshot 2025-05-20 133340](https://github.com/user-attachments/assets/6f553e9c-83a6-44d5-aaac-2f8c236dd35a)
![Screenshot 2025-05-20 133355](https://github.com/user-attachments/assets/aea2df88-addc-4959-8c7b-8f41bb1b1289)

---

## ⚙️ Features

- 🔐 Google OAuth 2.0 Authentication
- 📝 Create, Read, Update, Delete (CRUD) Tasks
- 📊 Dashboard with task summary
- 🔍 Search and sort tasks
- 📤 Export task list as PDF
- 💡 Responsive and modern UI using Tailwind CSS
- 🔐 Protected routes for authenticated users

---

## 🛠 Tech Stack

| Frontend       | Backend        | Auth        | Styling        |
|----------------|----------------|-------------|----------------|
| React          | Node.js        | Passport.js | Tailwind CSS   |
| React Router   | Express.js     | Google OAuth|                |
| Axios          | MongoDB        |             |                |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SakithNizar/Task_Flow.git
cd Task_Flow


2. Setup Backend

cd backend
npm install

Create a .env file inside /backend with the following:

MONGO_URI=your_mongodb_connection
SESSION_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Run the backend:
npm start

3. Frontend Setup
npm install
npm run dev

Folder Structure

Task_Flow/
│
├── backend/
│   ├── config/           # Passport config
│   ├── routes/           # Auth and task routes
│   ├── models/           # Mongoose schemas
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/   # Navbar, etc.
│   │   ├── pages/        # Login, Dashboard, Add/Edit Task
│   │   └── App.jsx
│
├── .gitignore
├── README.md

📄 License
This project is licensed under the MIT License.


🙋 Author

Built with ❤️ by Sakith Nizar
---

Let me know if you want:
- Badges (build, version, license)
- A deployment guide (Vercel/Render)
- Or to generate a `LICENSE` file automatically

I'm happy to help you finish the full launch setup!
