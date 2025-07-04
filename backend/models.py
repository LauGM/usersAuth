from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase, relationship
from flask_sqlalchemy import SQLAlchemy


# class Base es la clase base para los modelos de donde heredan todos
class Base(DeclarativeBase):
    pass


# db es una instancia de SQLAlchemy
db = SQLAlchemy(model_class=Base)


# --- Definición de Modelos ---
class User(Base):
    __tablename__ = "user"

    user_name: Mapped[str] = mapped_column(primary_key=True)
    password_hash: Mapped[str] = mapped_column(nullable=False)
    # password_hash es una forma de encriptar la contraseña de manera que si atacan mi BD no puedan verla

    def __repr__(self):
        return f"User(user_name={self.user_name!r}, password_hash={self.password_hash!r})"
    
    # !r significa la representacion 'raw' de la cadena y significa que la cadena se imprime tal cual (comillas como comilla y simbolos como simbolos)
    def serialize(self):
        return {
            "user_name": self.user_name,
        }