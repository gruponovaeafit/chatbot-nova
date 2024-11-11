# 🤖 NOVA Chatbot 2.0

## 📝 Descripción General

¡Bienvenido al proyecto NOVA Chatbot!

NOVA Chatbot es una innovadora herramienta de asistencia virtual desarrollada específicamente para el Grupo Estudiantil NOVA EAFIT. Este proyecto se centra en proporcionar respuestas rápidas, precisas y centralizadas a una amplia gama de consultas. Desde preguntas generales hasta solicitudes específicas, NOVA Chatbot está diseñado para servir tanto a personas externas interesadas en el grupo como a sus miembros activos.

## 🙌 Squad y Roles (v2.0)

![Banner Proyectos Communities - GitHub](https://github.com/user-attachments/assets/13c8de64-3907-4dca-91f6-92d6e515a21e)

- Lider de Proyecto: Samuel Lopera.
- Desarrollador: Miguel Sosa.
- Analista: José Andrés Mendoza.
- Diseñadora: Isabella Pardo.
- Analista: David Arismendy.

## 🌟 Características

- **Respuestas Instantáneas:** Capacidad para responder consultas frecuentes de manera eficiente y oportuna.
- **Información Actualizada:** Acceso a la información más reciente sobre eventos, iniciativas y noticias del grupo.
- **Interacción Amigable:** Interfaz intuitiva y fácil de usar, adaptada para una experiencia de usuario agradable.

## ¿Por qué NOVA Chatbot?

Elegir ChatBot NOVA significa optar por una comunicación clara y un acceso directo a la información. Es más que un simple chatbot; es una puerta de entrada a la comprensión profunda de lo que representa NOVA EAFIT y cómo cada uno puede ser parte de esta emocionante experiencia.

## 🚀 Comenzando

Sigue estos pasos para poner en marcha el chatbot para pruebas:

> [!NOTE]
> Para que el chatbot funcione es necesario correr la api también, esta se encuentra en el siguiente repositorio: [API NOVA Chatbot](https://github.com/gruponovaeafit/chatbot-nova-api/tree/main)

### Clonar el Repositorio

```bash
git clone https://github.com/gruponovaeafit/chatbot-nova.git
cd chatbot-nova
```

### Instalar Dependencias

> [!NOTE]
> Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

```bash
npm install
```

### Configurar las variables de entorno

1. Copiar el archivo `.env.example` y renombrarlo a `.env`:

   ```bash
   cp .env.example .env
   ```

2. Configurar las variables de entorno en el archivo `.env`.

### Ejecutar el Chatbot

```bash
npm run dev
```

## Ejecución con Docker

> [!NOTE]
> Asegúrate de tener [Docker](https://www.docker.com/) instalado en tu sistema y clonar este repositorio.

En la raíz del proyecto crear un archivo `docker-compose.yml` con el siguiente contenido:

> [!WARNING]
> Asegúrate de que la variable `VITE_SERVER_URL` en el servicio `frontend` coincida con la URL de la API en el servicio `backend` y cambiar los valores de las variables de entorno según sea necesario.

```yml
services:
  frontend:
    build:
      context: .
      args:
        VITE_SERVER_URL: http://localhost:8000/api/v1/chatbot/
    ports:
      - "80:80"

  backend:
    image: gruponovaeafit/chatbot-nova-api:latest
    ports:
      - "8000:8000"
    environment:
      - PORT=8000
      - API_NAME=chatbot
      - API_KEY=123456
      - PRODUCTION_SERVER_URL=http://localhost/
      - DEVELOPMENT_SERVER_URL=http://localhost/
      - LOCALHOST_SERVER_URL=http://localhost/
      - IS_PRODUCTION=0
```

Luego, ejecutar el siguiente comando:

```bash
docker-compose up -d
```

## 💬 Uso

El chatbot está diseñado para responder a una amplia gama de entradas de los usuarios. Siéntete libre de hacer preguntas, realizar afirmaciones o entablar una conversación casual. Solo escriba su mensaje y presione Enter para recibir una respuesta instantánea.
