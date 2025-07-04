# Pasos:

1. Teniendo el entorno virtual instalado
2. pipenv install flask
3. pip install SQLAlchemy
4. SQLite y Python: El módulo sqlite3 ya viene incluido con la instalación estándar de Python. No es un paquete que necesites instalar con pip. Por lo tanto, cuando creas un motor de SQLAlchemy para SQLite (create_engine('sqlite:///mi_bd.db')), Python ya tiene el driver necesario incorporado.
5. pipenv install Flask-SQLAlchemy
6. para ejecutar pipenv run python app.py
7. pip install flask_cors
8. pip install PyJWT