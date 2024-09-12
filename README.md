# 🤖 NOVA Chatbot 2.0

## 📝 Descripción General

¡Bienvenido al proyecto NOVA Chatbot! 

NOVA Chatbot es una innovadora herramienta de asistencia virtual desarrollada específicamente para el Grupo Estudiantil NOVA EAFIT. Este proyecto se centra en proporcionar respuestas rápidas, precisas y centralizadas a una amplia gama de consultas. Desde preguntas generales hasta solicitudes específicas, NOVA Chatbot está diseñado para servir tanto a personas externas interesadas en el grupo como a sus miembros activos.

## 🙌 Squad y Roles (v1.0)

![Banner Proyectos Communities - GitHub](https://github.com/gruponovaeafit/chatbot-nova/assets/65176988/b4da98fd-5e3e-42a8-85f8-4b3584bd42d9)

- **Lider de Proyecto:** Samuel Lopera ([sloperat@eafit.edu.co](mailto:sloperat@eafit.edu.co)).
- **Líder de Proyecto:** Miguel Rendón ([marendonq@eafit.edu.co](mailto:marendonq@eafit.edu.co)).
- **Análista:** Samuel Giraldo ([sgiraldoc8@eafit.edu.co](mailto:sgiraldoc8@eafit.edu.co)).
- **Diseñadora - Desarrolladora:** Lina Ballesteros ([lsballestm@eafit.edu.co](mailto:lsballestm@eafit.edu.co)).

## 🌟 Características

- **Respuestas Instantáneas:** Capacidad para responder consultas frecuentes de manera eficiente y oportuna.
- **Información Actualizada:** Acceso a la información más reciente sobre eventos, iniciativas y noticias del grupo.
- **Interacción Amigable:** Interfaz intuitiva y fácil de usar, adaptada para una experiencia de usuario agradable.

## ¿Por qué NOVA Chatbot?

Elegir ChatBot NOVA significa optar por una comunicación clara y un acceso directo a la información. Es más que un simple chatbot; es una puerta de entrada a la comprensión profunda de lo que representa NOVA EAFIT y cómo cada uno puede ser parte de esta emocionante experiencia.

## 🚀 Comenzando

Antes de ejecutar el código, asegúrate de tener la API Key de OpenAI como una variable de entorno. Debes solicitar esta clave al equipo de desarrollo y crear un archivo `.env` en el directorio raíz del proyecto.

Sigue estos pasos para poner en marcha el chatbot para pruebas:

### Clonar el Repositorio

```bash
git clone https://github.com/gruponovaeafit/chatbot-nova.git
cd chatbot-nova
```

### Crear y Activar el Entorno Virtual

En Linux/MacOS:

1. Crear el Entorno Virtual:

   ```bash
   python3 -m venv venv
   ```

2. Activar el Entorno Virtual:

   ```bash
   source venv/bin/activate
   ```

En Windows:

1. Crear el Entorno Virtual:

   ```bash
   python -m venv venv
   ```
2. Activar el Entorno Virtual (CMD):

   ```bash
   venv\Scripts\activate.bat
   ```
3. Activar el Entorno Virtual (PowerShell):

   ```bash
   venv\Scripts\Activate.ps1
   ```

### Instalar Dependencias
```bash
pip install -r requirements.txt
```
### Configurar la Variable de Entorno
1. Crear un Archivo `.env` en el Directorio Raíz del Proyecto.
2. Agregar la Siguiente Línea al Archivo `.env`:

   ```bash
   API_KEY=tu_api_key
   ```
3. Instalar el Paquete python-dotenv si no está Instalado:

   ```bash
   pip install python-dotenv
   ```
###  Ejecutar el Chatbot
```bash
cd backend
python NovaBot.py
```

## 🧠 Cerebro

Ver archivo [CEREBRO.md](https://github.com/gruponovaeafit/chatbot-nova/blob/main/CEREBRO.md) para conocer más detalles de los datos de entrenamiento y el proceso de fine-tuning del NOVA Chatbot.


## 💬 Uso
El chatbot está diseñado para responder a una amplia gama de entradas de los usuarios. Siéntete libre de hacer preguntas, realizar afirmaciones o entablar una conversación casual.

```bash
Ingresa tu pregunta! (escribe 'exit' para salir): Hablame de Communities
```
```bash
NovaBot: Las comunidades son un elemento clave en el ámbito de las relaciones 
públicas y especialmente en el trabajo del departamento de RRPP de NOVA...
```

## 🧪 Lineamientos para Pruebas
Durante la fase de prueba, enfócate en los siguientes aspectos:

- **Variaciones de Entrada:** Prueba el chatbot con una variedad de entradas para asegurar su robustez.
- **Retención de Contexto:** Verifica si el chatbot mantiene el contexto en conversaciones más largas.
- **Manejo de Errores:** Prueba cómo el chatbot maneja entradas inesperadas o inválidas.
