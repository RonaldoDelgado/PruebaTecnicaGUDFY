# Prueba técnica empresa GUDFY

Presenta: Ronaldo Delgado Correa

## Instalación del proyecto

Para ejecutar el proyecto en su totalidad, sigue estos pasos después de clonar el repositorio:

### Front-end
1. Abre una consola y navega hasta la carpeta `cliente`.
2. Ejecuta el comando `npm install` para instalar las dependencias de Node.js.

### Back-end
1. Abre una consola y navega hasta la carpeta `server`.
2. Ejecuta el comando `python -m venv venv` para crear un entorno virtual de Python.
3. Activa el entorno virtual:
    - En Windows, abre la paleta de comandos con `Ctrl+Mayús+P`, busca "Python: Select Interpreter" y selecciónalo. Debería aparecer la recomendación de Python con tu versión y la ruta a la carpeta `venv` recién creada. Si no es así, busca `\server\venv\Scripts\python.exe`.
    - En macOS o Linux, ejecuta el comando `source venv/bin/activate`.
4. Instala las librerías necesarias con el comando `pip install -r requirements.txt`.
5. Crea el modelo `task` en la base de datos con el comando `python manage.py makemigrations`.
6. Aplica las migraciones con el comando `python manage.py migrate`.

## Ejecución del proyecto
1. Abre una consola y navega hasta la carpeta `server`.
2. Ejecuta el comando `python manage.py runserver`.
3. Abre otra consola y navega hasta la carpeta `cliente`.
4. Ejecuta el comando `npm run dev`.

Una vez que se haya cargado la página web, accede a tu localhost en el puerto 5173: http://localhost:5173/
