from flask import Flask, jsonify, request
from sqlalchemy import select
from models import db, User
from flask_cors import CORS # Para manejar CORS, necesario si el frontend está en un dominio/puerto diferente
from werkzeug.security import generate_password_hash, check_password_hash # Para hashear contraseñas
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from datetime import datetime, timedelta, timezone # Para manejar la expiración del token


app = Flask(__name__)
CORS(app)
# Configuración de la Base de Datos
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
jwt = JWTManager(app)
# Configuración de la clave secreta para JWT (¡MUY IMPORTANTE!)
# En un entorno de producción, esto debería ser una variable de entorno segura
app.config['SECRET_KEY'] = "mi_clave_secreta"
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)  # Token expires in 1 hour
    
with app.app_context():
    db.init_app(app)
    db.create_all()
    print("Base de datos creada")

# --- Definición de Rutas ---
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Auth API!"})

@app.route('/users', methods=['GET'])
def get_users():
    # Obtener todos los usuarios de la base de datos
    users = db.session.execute(db.select(User)).scalars().all()
    return jsonify([user.serialize() for user in users]), 200


@app.route('/register', methods=['POST'])
def register_user():
    """
    Ruta para el registro de nuevos usuarios.
    Espera un JSON con 'username' y 'password'.
    Hashea la contraseña y la guarda en la base de datos.
    """
    data = request.get_json()

    # Validar que los datos necesarios estén presentes
    if not data or not 'user_name' in data or not 'password' in data:
        return jsonify({"message": "Missing username or password"}), 400

    user_name = data['user_name']
    password = data['password']

    # Validaciones básicas (puedes añadir más, ej. longitud mínima)
    if not user_name or not password:
        return jsonify({"message": "Username and password cannot be empty"}), 400

    try:
        # Verificar si el nombre de usuario ya existe
        existing_user = db.session.execute(
            db.select(User).filter_by(user_name=user_name)
        ).scalar_one_or_none() 
        # scalar_one_or_none() devuelve None si no encuentra el usuario

        if existing_user:
            return jsonify({"message": "Username already exists"}), 409 # 409 Conflict

        # Hashear la contraseña antes de guardarla
        # generate_password_hash usa por defecto 'pbkdf2:sha256' que es seguro
        hashed_password = generate_password_hash(password)

        # Crear una nueva instancia de usuario
        new_user = User(user_name=user_name, password_hash=hashed_password)

        # Añadir el usuario a la sesión de la base de datos y confirmar
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User registered successfully!"}), 201 # 201 Created
    
    except Exception as e:
        # Manejo de errores genérico para la base de datos
        db.session.rollback() # Deshacer cualquier cambio en caso de error
        print(f"Error during registration: {e}") # Imprimir el error para depuración
        return jsonify({"message": "An error occurred during registration"}), 500 # 500 Internal Server Error
    

@app.route('/token', methods=['POST'])
def login_user():
    """
    Ruta para el inicio de sesión de usuarios.
    Espera un JSON con 'username' y 'password'.
    Verifica las credenciales y, si son válidas, genera un JWT.
    """
    data = request.get_json()

    if not data or not 'user_name' in data or not 'password' in data:
        return jsonify({"message": "Missing username or password"}), 400

    user_name = data['user_name']
    password = data['password']

    try:
        # Buscar el usuario en la base de datos
        user = db.session.execute(
            db.select(User).filter_by(user_name=user_name)
        ).scalar_one_or_none()

        # Verificar si el usuario existe y si la contraseña es correcta
        if not user or not check_password_hash(user.password_hash, password):
            return jsonify({"message": "Invalid username or password"}), 401 # 401 Unauthorized

        # Si las credenciales son correctas, generar el JWT
        # El payload contiene información del usuario y la fecha de expiración
        # Puedes añadir más datos no sensibles al payload si es necesario
       
        # Verificar las credenciales...
        token = create_access_token(identity=user_name)
        expires_in = int(app.config['JWT_ACCESS_TOKEN_EXPIRES'].total_seconds())
        return jsonify({
            "message": "Login successful",
            "token": token,
            "token_type": "bearer",
            "expires_in": expires_in,
            "expires_at": (datetime.now(timezone.utc) + timedelta(seconds=expires_in)).isoformat()
        }), 200
    except Exception as e:
        print(f"Error during login: {e}")
        return jsonify({"message": "An error occurred during login"}), 500 # 500 Internal Server Error 

@app.route('/protected', methods=['GET'])
@jwt_required()
# solo usuarios autenticados pueden acceder a esta ruta hay que agregar headers Authorization: Bearer <token> al GET
# para probarlo en postman
# 1. ir a la pestaña GET
# 2. ir a la pestaña Headers
# 3. agregar Authorization: Bearer <token>
def protected():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Hello, {current_user}!"}), 200

@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    # Return success response - the client should delete their token
    return jsonify({"message": "Logout successful"}), 200

if __name__ == "__main__":
    app.run(debug=True, port=5001)  