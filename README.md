# 🚀 Flipr Fullstack Project

A complete fullstack web application for showcasing projects and happy clients, with an admin panel to manage submissions and a fully responsive landing page.

Built using **React (Vite)**, **Express.js**, **MongoDB**, and **Tailwind CSS**.

---

## 🌟 Features

### 🖥️ Landing Page
- **Our Projects**: Display projects with image, name, and description.
- **Happy Clients**: List client testimonials with image, name, and designation.
- **Contact Form**: Submit name, email, phone, and city — stored in the backend.
- **Newsletter Subscription**: Submit an email to join the mailing list.

### 🛠️ Admin Panel
Accessible at `/admin`, includes:
- **Project Management**: Add new projects via a form.
- **Client Management**: Add client testimonials.
- **View Contacts**: View all contact form responses.
- **View Subscribers**: View all newsletter emails submitted.

---

## 🧰 Technologies Used

| Frontend         | Backend     | Database       | Styling       |
|------------------|-------------|----------------|----------------|
| React + Vite     | Express.js  | MongoDB Atlas  | Tailwind CSS  |
| React Router     | REST API    | Mongoose       |                |
| Fetch API        | dotenv, cors|                |                |

---

## 📂 Folder Structure


flipr-project/ 
    ├── flipr-frontend/ ← React App 
    └── flipr-backend/ ← Express API

---

## ⚙️ Local Setup

### 1. Clone the Repos
<pre>
bash
git clone https://github.com/your-username/flipr-frontend.git
git clone https://github.com/your-username/flipr-backend.git
</pre>

2. Backend Setup
<pre>
bash
cd flipr-backend
npm install
</pre>

Add a .env file:

env
MONGO_URI=your-mongodb-uri
PORT=5000

Start the backend server:
<pre>
bash
npm run dev
</pre>

3. Frontend Setup
<pre>
bash
cd ../flipr-frontend
npm install
</pre>

Create .env file:
env
VITE_API_BASE_URL=http://localhost:5000

Run the frontend dev server:
<pre>
bash
npm run dev
</pre>
#   f u l l s t a c k - a p p 
 
 
