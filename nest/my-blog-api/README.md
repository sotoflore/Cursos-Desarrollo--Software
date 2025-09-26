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


## Migraciones

Para realizar migraciones agreggamos esto en src/database/orm-config.ts :

```ts
import { DataSource } from "typeorm"

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "BlogBD",
    entities: ['./src/**/*.entity.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    synchronize:false
    //migrationsTableName: "custom_migration_table",
})
```

los comandos agregados en el package.json son :
```json
"scripts": {
    "typeorm":"typeorm-ts-node-commonjs -d ./src/database/orm-config.ts",
    "migrations:generate":"npm run typeorm migration:generate",
    "migrations:create":"typeorm-ts-node-commonjs migration:create",
    "migrations:show":"npm run typeorm migration:show",
    "migrations:run":"npm run typeorm migration:run",
    //"migrations:revert":"npm run typeorm migration:revert",
}
```

generamos la primera migracion y le especificamos una carpeta en este caso migrations dentro de database

```bash
npm run migrations:generate ./src/database/migrations/init
```

Con el siguiente comando vemos si se genero o no:

```bash
 npm run migrations:show
```
y como podemos ver , lo genero correctamente:

```bash
> my-blog-api@0.0.1 migrations:show
> npm run typeorm migration:show


> my-blog-api@0.0.1 typeorm
> typeorm-ts-node-commonjs -d ./src/database/orm-config.ts migration:show

[ ] Init1758815358917
```

Para ejecutarlo:
```bash
npm run migrations:run
```
y nuevamente ejecutamos 
```bash
npm run migrations:show
```

Y podemos observar que la migracion de ejecuto correctamente, porque ya esta marcado en X.

```bash
> my-blog-api@0.0.1 migrations:show
> npm run typeorm migration:show


> my-blog-api@0.0.1 typeorm
> typeorm-ts-node-commonjs -d ./src/database/orm-config.ts migration:show

[X] 1 Init1758815358917
```

### Migracion manual
Creamos una migracion manual para no perder la informacion que ya existia en la base de datos y poder aplicar nuevos cambios para los nuevos datos

Creamos la migracion y le especificamos una carpeta en este caso migrations dentro de database

```bash
npm run migrations:create ./src/database/migrations/init-manual
```

## Documentacion

url para obtener el json http://localhost:3000/swagger/json

```ts
if(nodeEnv === "development" || nodeEnv === "dev"){
    const config = new DocumentBuilder()
      .setTitle("Post example")
      .setDescription("The Post api description")
      .setVersion('1.0')
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, documentFactory, {
      jsonDocumentUrl: 'swagger/json',
    })
  }
```

## Seguridad

Instalar Helmet https://docs.nestjs.com/security/helmet
```bash
npm i --save helmet
```

## Cors

Habilita para todos
```ts
app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
})
```

## despliegue

en el package.json agregamos 
```json
{
"engines": {
    "node": ">=20.0.0"
  }

}
```
luego ejecutamos el comando **`npm run build`**.

Despues las migraciones **`npm run typeorm migration:run`**.

finalmente **`npm run start:prod`**
