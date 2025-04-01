# Reporte de Configuración del Sistema de Gestión de Tareas

## Configuración del Pipeline de Jenkins

- **Clonación del Repositorio:** Configurado para clonar desde GitHub.
- **Instalación de Dependencias:** Usa `npm install` para instalar las dependencias del proyecto.
- **Ejecución de Pruebas:** Configurado para ejecutar `npm test`. Actualmente, no hay pruebas especificadas.
- **Construcción de la Imagen Docker:** Usa `docker build` para construir la imagen de la API.

## Problemas Encontrados y Soluciones

- **Error de Pruebas:** No hay pruebas especificadas, se añadió un script básico para evitar fallos.
- **Configuración de Jenkins en Windows:** Se cambió `sh` por `bat` para comandos en Windows.

## Descripción de la API

- **Rutas Implementadas:**
  - `GET /tasks`: Devuelve todas las tareas.
  - `GET /tasks/:id`: Devuelve una tarea específica por ID.
  - `POST /tasks`: Añade una nueva tarea.

## Docker

- **Dockerfile:** Configurado para contenerizar la API y exponer el puerto 3000.

## Instrucciones Básicas

- **Ejecutar la Aplicación:** Usa `node app.js` para iniciar la API localmente.
- **Probar la API:** Usa herramientas como Postman para interactuar con las rutas.
