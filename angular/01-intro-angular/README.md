# Intro Angular

En esta sección aprenderemos sobre:

- Señales
- Estado
- Propiedades
- Rutas
- Métodos
- Eventos
- Cambios en el DOM
- Cada archivo y directorio de un proyecto

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Crear el proyecto

**Importante**: Tener instalado en CLI de angular.

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

## Señales (Signals)

las signals son una nueva forma de manejar estado reactivo.
Son valores que "emiten" automáticamente cambios cuando se actualizan, y cualquier parte del código que dependa de ellas se vuelve a ejecutar de manera eficiente.

En otras palabras:

- Una señal es una cajita especial donde guardas un valor.

- Si ese valor cambia, Angular sabe qué cosas deben actualizarse en la interfaz (UI) o en la lógica, sin que tú tengas que decirle manualmente.

## Zoneless

### Contexto: ¿Qué es Zone.js?

Tradicionalmente, Angular depende de Zone.js, una librería que "parchea" (hookea) las APIs del navegador (eventos, promesas, setTimeout, etc.) para saber cuándo algo cambió y así volver a ejecutar la detección de cambios en toda la aplicación.

En otras palabras:

- Zone.js es como un vigilante que escucha todo lo que pasa (clics, respuestas HTTP, timers, etc.).
- Cada vez que ocurre algo, le dice a Angular: "Oye, algo pasó, revisa toda la UI por si necesitas actualizar algo".

Esto funciona, pero a veces es ineficiente, porque Angular revisa más de la cuenta.

### ¿Qué significa Zoneless?

Zoneless = Angular funcionando sin Zone.js, Es decir, sin ese "vigilante" que dispara la detección de cambios todo el tiempo.

En su lugar:

- Angular se apoya en Signals (estado reactivo).
- Solo se actualizan las partes que dependen de esas señales.
- El desarrollador tiene más control sobre qué y cuándo actualizar.

### Analogía para entenderlo
#### Con Zone.js (lo clásico)
Imagina que en tu oficina hay un guarda de seguridad que revisa TODAS las habitaciones cada vez que alguien entra al edificio, aunque solo se use una sala de juntas.

- Funciona, pero es cansado e ineficiente.
- Muchas veces revisa salas vacías.

#### Zoneless

Ahora, en lugar del guarda revisando todo, cada habitación tiene un sensor inteligente.

- Si alguien entra en esa sala, el sensor lo detecta y solo esa sala se actualiza.
- Nadie pierde tiempo revisando lo demás.

Ese "sensor inteligente" son las **signals**.

## Señales computadas - Readonly Signal

En Angular, una **signal** normal es como una cajita donde puedes leer y escribir valores (`set`, `update`).

Una **señal computada** (computed) en cambio:

- No puedes escribirle directamente.
- Su valor se calcula automáticamente en base a otras signals.
- Siempre está actualizado y es solo de lectura (readonly).

 Por eso se les llama **readonly signals**: no puedes hacer ``set(), solo leer `(())`.

 ## Eventos

 En Angular, un **evento** es una acción que ocurre en la aplicación y que puedes "escuchar" para ejecutar código en respuesta.

Los eventos normalmente vienen de:

- El **usuario**: clic, escribir en un input, mover el mouse, enviar un formulario.
- El **navegador**: cargar la página, presionar teclas.
- El **propio Angular**: comunicación entre componentes (con `@Output`).

**Sintaxis de eventos**

En Angular, escuchar eventos se hace con paréntesis:

**`(elemento)(evento)="acción"`**

**Ejemplo básico**

```html
<button (click)="sayHello()">Haz clic</button>
```
En el componente:

```ts
sayHello() {
  console.log('¡Hola!');
}
```

- **`(click)`** : nombre del evento (cuando el usuario hace clic).
- **`"sayHello()"`** : método del componente que se ejecuta.

## Pipes

En Angular, un **pipe** es como un **filtro** o **transformador** de datos.
Sirve para mostrar los datos en la vista de una forma diferente a como están en la lógica.

Se usan en el HTML (templates) con la sintaxis **`{{ valor | pipe }}`**.

**Ejemplo rápido**

```html
<p>{{ 'hola mundo' | uppercase }}</p>
```

- `hola mundo` es el valor original.
- `uppercase` es un pipe que convierte a mayúsculas.
- Resultado: `HOLA MUNDO`.

### Características de los pipes

- **Son declarativos** : no cambias la variable en el `TS`, solo cómo se muestra en el `HTML`.
- **Son reutilizables** : puedes usar el mismo pipe en muchos lugares.
- **Se pueden encadenar** : usar varios pipes juntos.
    ```html
    <p>{{ 'hola mundo' | uppercase | lowercase }}</p>
    <p>{{ 3.141592 | number:'1.2-2' | uppercase }}</p>
    ```
También puedes crear tus propios pipes personalizados.

### Pipes más comunes en Angular

- **uppercase**: convierte a mayúsculas.
    ```html
    <p>{{ 'hola mundo' | uppercase}}</p>
    ```
- **lowercase**: convierte a minúsculas.
    ```html
    <p>{{ 'HOLA MUNDO' | lowercase}}</p>
    ```
- **date**: formatea fechas.
    ```html
    <p>{{ today | date:'dd/MM/yyyy' }}</p>
    ```

- **currency** : da formato de moneda.
    ```html
    <p>{{ 1500 | currency:'USD' }}</p>
    ```
- **json** : muestra objetos en formato JSON (útil para depuración).
- **async** : trabaja con observables o promesas.
