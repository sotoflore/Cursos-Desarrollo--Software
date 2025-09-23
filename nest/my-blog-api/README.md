<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


## Primeros pasos con NestJS

Para instalar y configurar NestJS, sigue estos pasos:

- **Instala Node.js**: Asegúrate de tener una versión de Node.js instalada.
- **Instala el CLI de NestJS**: Ejecuta el siguiente comando en tu terminal para instalar el CLI de forma global:

    ```bash
    npm install -g @nestjs/cli
    ```
- **Crea un nuevo proyecto**: Usa el comando para crear un nuevo proyecto, sustituyendo **my-blog-api** por el nombre que desees:
    ```bash
    nest new my-blog-api      
    ```
- **Selecciona el manejador de paquetes**: Durante la creación, elige **NPM**, **Yarn** o **PNPM** según prefieras.

- Navega a la carpeta del proyecto
    ```bash
    cd my-blog-api
    ```
- **Inicia el proyecto:** Ejecuta el siguiente comando para levantar la aplicación:

    ```bash
    npm run start
    ```
- **Desarrollo en modo live reloading**: Para habilitar el live reloading, utiliza:

    ```bash
    npm run start:dev
    ```
Ahora tu aplicación NestJS debería estar corriendo en **`localhost:3000`**. Puedes modificar el archivo **`app.service.ts`** para cambiar el mensaje inicial.