# Authentication Project
## Laura González Martin

A full-stack authentication system built with React.js frontend and Flask backend, featuring user registration, login, and protected routes.

## 🚀 Features

- **User Registration**: Create a new account with email and password
- **User Login**: Secure authentication with JWT (JSON Web Tokens)
- **Protected Routes**: Access control for authenticated users only
- **Responsive Design**: Built with Tailwind CSS for all screen sizes
- **Toast Notifications**: User feedback for actions and errors

## 🛠 Tech Stack

### Frontend
- React.js
- React Router v7
- Tailwind CSS
- React Icons
- React Toastify
- Vite

### Backend
- Python 3.11
- Flask
- Flask-SQLAlchemy
- Flask-JWT-Extended
- Flask-CORS

## 📦 Prerequisites

- Node.js (v16 or higher)
- Python 3.11
- pipenv (Python package manager)

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pipenv install
   ```

3. Run the Flask development server:
   ```bash
   pipenv run python app.py
   ```
   The backend server will start at `http://localhost:5001`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

## 📂 Project Structure

```
Proyecto-autenticacion/
├── backend/
│   ├── app.py              # Flask application entry point
│   ├── models.py           # Database models
│   ├── Pipfile             # Python dependencies
│   └── instance/           # Database files
└── frontend/
    ├── src/
    │   ├── components/     # Reusable React components
    │   ├── views/          # Page components
    │   ├── services/       # API service functions
    │   ├── App.jsx         # Main application component
    │   └── main.jsx        # Application entry point
    ├── public/             # Static files
    ├── package.json        # Node.js dependencies
    └── vite.config.js      # Vite configuration
```

## 🔒 Environment Variables

For better security and configuration management, you should move the following hardcoded values from `app.py` to environment variables. Create a `.env` file in the backend directory with the following variables:

```
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secure-secret-key-here
JWT_SECRET_KEY=your-jwt-secret-key-here
SQLALCHEMY_DATABASE_URI=sqlite:///users.db
JWT_ACCESS_TOKEN_EXPIRES=3600  # 1 hour in seconds
```

Then update your `app.py` to use these environment variables:

```python
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'fallback-secret-key')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI', 'sqlite:///users.db')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'jwt-secret-key')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(seconds=int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES', 3600)))
```

## 📝 API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Authenticate user and get access token
- `GET /api/dashboard` - Protected route for authenticated users
- `POST /api/logout` - Invalidate user session

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [4Geeks Academy](https://www.4geeksacademy.com/)
- [React](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Tailwind CSS](https://tailwindcss.com/)
