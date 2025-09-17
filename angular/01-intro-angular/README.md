# Intro Angular

En esta sección aprenderemos sobre:

• Señales
• Estado
• Propiedades
• Rutas
• Métodos
• Eventos
• Cambios en el DOM
• Cada archivo y directorio de un proyecto

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Crear el proyecto

***Importante**: Tener instalado en CLI de angular.

```bash
ng new project-name
```

## Bloques fundamentales

### Componentes
Es una pieza que representa una parte de la interfaz de usuario.
- logica (ts)
- Estilos (scss, css, sass, etc) - opcional
- Plantilla HTML

### Rutas
Permiten cambiar paginas (componentes que usualmente cubren todo el punto de vista).
- Separar logica
- Control de acceso y autorizacion
- Estrategia de renderizado

### Directivas
Modifican el comportamiento de un elemento HTML.

- Atributo: ngClass, ngStyles, etc.
- Estructurales: ngIf, ngFor, etc.
- Componente personalizadas

### Servicios
Encapsulan logica de negocio y centralizan su acceso.

- Gestion de datos
- Reutilizacion de codigo
- Injeccion de dependencias

### Modulos
Agrupan funcionalidades relacionadas, permitiendo su uso en otros componentes o modulos.
- Organizan la aplicacion
- Encapsulan dependencias
- Facilitan la carga bajo demanda

### Pipes
Transforman datos de forma visual para representarlos apropiadamente en los componentes.
- Modifican como se representan datos
- Ordenar y filtrar
- Optimizacion de rendimiento

