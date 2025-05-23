from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import OperationalError

from app.core.config import settings
from app.db.database import engine, Base
from app.routes import auth_router, persona_router, atencion_router, grupo_router, personal_router, contacto_emergencia_router, programa_educativo_router, cuestionario_router

# Crear tablas en la base de datos
try:
    Base.metadata.create_all(bind=engine)
except OperationalError:
    print("Error al crear las tablas. Asegúrate de que la base de datos esté disponible.")

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(auth_router, prefix=settings.API_V1_STR)
app.include_router(persona_router, prefix=settings.API_V1_STR)
app.include_router(atencion_router, prefix=settings.API_V1_STR)
app.include_router(grupo_router, prefix=settings.API_V1_STR)
app.include_router(personal_router, prefix=settings.API_V1_STR)
app.include_router(contacto_emergencia_router, prefix=settings.API_V1_STR)
app.include_router(programa_educativo_router, prefix=settings.API_V1_STR)
app.include_router(cuestionario_router, prefix=settings.API_V1_STR)


@app.get("/")
def root():
    return {"message": "Bienvenido a la API del Sistema de Seguimiento Psicopedagógico"}
