# Task Manager App

A full-stack task management application built with React.js and Node.js. Features include adding, completing, and deleting tasks with real-time updates. The frontend uses React hooks and Axios for API communication, while the backend provides a RESTful API with Express.js and in-memory data storage.

![Task Manager](https://img.shields.io/badge/React-18.x-blue) ![Node.js](https://img.shields.io/badge/Node.js-14%2B-green) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Real-time updates
- ✅ Clean and responsive UI
- ✅ RESTful API architecture

## Tech Stack

### Frontend
- **React.js** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before running this application, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd task-manager-app
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Running the Application

You need to run both the backend and frontend servers simultaneously.

### Terminal 1 - Start the Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`

### Terminal 2 - Start the Frontend Server

```bash
cd frontend
npm start
```

The React app will open automatically at `http://localhost:3000`

## Project Structure

```
task-manager-app/
├── backend/
│   ├── node_modules/
│   ├── server.js           # Express server and API routes
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styles
│   │   └── index.js        # React entry point
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update task completion status |
| DELETE | `/api/tasks/:id` | Delete a task |

