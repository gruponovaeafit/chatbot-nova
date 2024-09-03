from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
from fastapi.responses import JSONResponse
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

# Routes and config modules import
from app.api.config.env import (API_NAME, DEVELOPMENT_SERVER_URL,
                                LOCALHOST_SERVER_URL, PRODUCTION_SERVER_URL)
from app.api.config.limiter import limiter
from app.api.routes.routes import router

# Load environment variables from .env file

title = f"{API_NAME} API"
description = f"{API_NAME} API description."
version = "2.0.0"
servers = [
    {"url": LOCALHOST_SERVER_URL, "description": "Localhost server"},
    {"url": DEVELOPMENT_SERVER_URL, "description": "Development server"},
    {"url": PRODUCTION_SERVER_URL, "description": "Production server"},
]
contact = {
    "name": "Grupo Estudiantil NOVA",
    "url": "https://www.instagram.com/novaeafit/",
    "email": "gruponova@eafit.edu.co",
}
license_info = {
    "name": "MIT",
    "url": "https://opensource.org/licenses/MIT",
}

# Crear instancia de fastapi
app = FastAPI(
    openapi_url=f"/api/v1/{API_NAME}/openapi.json",
    docs_url=f"/api/v1/{API_NAME}/docs",
    redoc_url=f"/api/v1/{API_NAME}/redoc",
    servers=servers,
    title=title,
    description=description,
    version=version,
    contact=contact,
    license_info=license_info,
)


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title=title,
        version=version,
        description=description,
        routes=app.routes,
        servers=servers,
    )
    openapi_schema["info"]["x-logo"] = {"url": "..."}  # Add your logo URL here
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ajusta esto según tus necesidades
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.openapi = custom_openapi


@app.exception_handler(RateLimitExceeded)
async def _rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429, content={"detail": "Rate limit exceeded. Try again later."}
    )


app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


@app.on_event("startup")
async def on_startup():
    # Actions to be executed when the API starts.
    print("API started")
    print(f"Localhost Server URL: {LOCALHOST_SERVER_URL}")
    print(f"Development Server URL: {DEVELOPMENT_SERVER_URL}")
    print(f"Production Server URL: {PRODUCTION_SERVER_URL}")


@app.on_event("shutdown")
async def on_shutdown():
    # Actions to be executed when the API shuts down.
    print("API shut down")


# Include the routes
app.include_router(router, prefix=f"/api/v1/{API_NAME}")
