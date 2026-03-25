# EduLearn

EduLearn is a comprehensive full-stack educational web application. It provides a platform for managing and interacting with educational content, courses, and user profiles.

## Tech Stack

The project is divided into two main components:

### Frontend
- **React 19** with **Vite** for fast, modern UI development.
- **Tailwind CSS 4** for responsive, utility-first styling.
- **Framer Motion** for smooth animations and micro-interactions.
- **React Router DOM** for robust client-side routing.
- **Axios** for handling external HTTP requests.
- **Formik** for powerful form state management and error validation.
- **Lucide React** for beautiful and consistent icons.

### Backend
- **Node.js** & **Express.js** for building a robust RESTful API.
- **MongoDB** (with **Mongoose**) for flexible NoSQL database management.
- **JSON Web Tokens (JWT)** for secure, stateless user authentication.
- **Bcrypt** for hashing passwords and ensuring security.
- **Cloudinary** and **Multer** for seamless handling and storage of file uploads.
- **Cors** and **Dotenv** for secure cross-origin requests and environment variable configuration in the `.env` file.

## Project Structure

```text
EduLearn/
├── backend/
│   └── backend/     # Node.js/Express backend server
│       ├── config/      # Database and external service configurations
│       ├── controllers/ # Request handlers and business logic
│       ├── middlewares/ # Express middlewares (e.g., auth, upload)
│       ├── models/      # Mongoose database schemas
│       ├── routes/      # API endpoint definitions
│       └── server.js    # Entry point for the backend application
└── frontend/        # React/Vite frontend application
    ├── public/      # Static assets and icons
    └── src/         # Source code (components, pages, styles)
```

## Prerequisites

Before running the project locally, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or a MongoDB Atlas connection)
- A [Cloudinary](https://cloudinary.com/) account for managing media uploads and specific API keys.

## Environment Variables

Both the frontend and backend require `.env` files to configure sensitive API keys, connection strings, and application-specific settings.

### Backend `.env`
Create a `.env` file inside the `backend/backend/` directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_URL=your_cloudinary_url
# Add any JWT secrets or other required keys here
```

### Frontend `.env`
Create a `.env` file in the `frontend/` directory (note that Vite requires `VITE_` prefix for exposed client-side environment variables):
```env
VITE_API_URL=http://localhost:4000
```

## Getting Started

Follow these step-by-step instructions to set up the project locally.

### 1. Clone the repository
In a new terminal, execute the following commands:
```bash
git clone <your-repository-url>
cd EduLearn
```

### 2. Backend Setup
Navigate to the backend directory, install server dependencies, and start the application:
```bash
cd backend/backend
npm install
npm run server
```
The backend server should now be running on `http://localhost:4000` (or whichever port is defined in your backend `.env`).

### 3. Frontend Setup
Open a separate terminal window, navigate to the frontend directory, install client dependencies, and start the Vite development server:
```bash
cd frontend
npm install
npm run dev
```
The frontend application will compile and become available at `http://localhost:5173` (or the port specified by Vite in the terminal output).
