# Clean Code y Deuda Técnica

> [!NOTE]
> "codigo limpio es aquel que se a escrito con la inteción de que otra persona (o tu mismo en el futuro) lo entienda" - Carlos Ble.

> [!NOTE]
> "Nuestro codigo tiene que ser simple y directo, deberia leerse con la misma facilidad que un texto bien escrito" - Grady Booch.

> [!NOTE]
> "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga" - Donal Knuth.

Menu

- Deuda técnica
    - Como pagar la deuda técnica
    - Tipos 
    - Consecuencias de la deuda técnica
    
- Cuadrante de la deuda técnica
- Principios DRY (Don't Repeat Yourself)


## ¿Qué es la deuda técnica?

La **deuda técnica** es un concepto en el desarrollo de software que se refiere a las consecuencias a largo plazo de tomar decisiones de diseño o implementación rápidas y subóptimas para cumplir con plazos a corto plazo. 

Es una analogía de la **deuda financiera**: si pides dinero prestado, lo obtienes rápidamente pero tendrás que pagar intereses más tarde. De manera similar, si tomas atajos en el código, ganas tiempo a corto plazo, pero tendrás que **"pagar intereses"** en forma de esfuerzo adicional y tiempo perdido en el futuro para mantener, corregir o extender ese código.

**Ejemplos de deuda técnica**

- **Código duplicado**: copiar/pegar en lugar de abstraer en funciones o componentes.
- **Falta de pruebas**: entregar rápido sin escribir unit tests o integración.
- **Arquitectura improvisada**: empezar sin diseño claro, lo que luego limita la escalabilidad.
- **Dependencias desactualizadas**: usar librerías viejas porque "ya funciona", pero luego es más costoso migrar.
- **Malas prácticas**: nombres de variables poco claros, funciones muy largas, comentarios inexistentes.

**Causas comunes:**

- **Presión de tiempo**: “Necesitamos esto para ayer”.
- **Falta de conocimiento**: el equipo no sabía una mejor forma en ese momento.
- **Priorización incorrecta**: se busca valor inmediato en lugar de sostenibilidad.
- **Evolución natural**: lo que funcionaba al inicio ya no escala con el crecimiento del proyecto.

### Tipos de Deuda Técnica
Existen principalmente dos tipos de deuda técnica, dependiendo de la intencionalidad de su creación:

1. **Deuda técnica intencional**
Esta ocurre cuando un equipo de desarrollo decide conscientemente tomar un atajo. Esto puede suceder para lanzar un producto rápidamente, cumplir con un plazo estricto o probar una idea en el mercado. El equipo sabe que el código no es ideal y que necesitarán volver a él más tarde para **"refactorizarlo"** (mejorarlo).

2. **Deuda técnica no intencional**
Esta es la más común y se crea sin intención. Ocurre por falta de conocimiento, presión de tiempo excesiva, falta de experiencia o simplemente por un diseño deficiente. El equipo no se da cuenta de que está creando problemas a futuro hasta que estos surgen, a menudo en forma de errores o dificultades para agregar nuevas funcionalidades.

### ¿Cómo se Paga la Deuda Técnica?
Pagar la deuda técnica significa **refactorizar el código**. **Refactorizar** es el proceso de mejorar la estructura interna del código sin cambiar su comportamiento externo. Es como limpiar y organizar un cuarto desordenado para que sea más fácil encontrar cosas y añadir nuevos muebles. Al refactorizar, se reduce la complejidad del código, se eliminan las redundancias y se mejora su legibilidad y mantenibilidad.

#### Refactorización
La **refactorización** es un proceso en el desarrollo de software que consiste en mejorar la estructura interna del código sin cambiar su comportamiento externo. El objetivo principal es hacer el código más fácil de leer, entender, mantener y extender, lo que reduce la deuda técnica y mejora la calidad del software a largo plazo.

Es como limpiar y reorganizar un armario desordenado, no añades ni quitas ropa (no cambias la funcionalidad), pero al organizarla, te resulta mucho más fácil encontrar lo que buscas y guardar cosas nuevas en el futuro.

**Objetivos Clave de la Refactorización**

- **Mejorar la legibilidad**: Utilizar nombres de variables y funciones más claros, eliminar código duplicado y reducir la complejidad para que otros desarrolladores (o tú mismo en el futuro) puedan entender el código rápidamente.

- **Reducir la complejidad**: Simplificar la lógica de las funciones, dividiendo las tareas complejas en partes más pequeñas y manejables.

- **Aumentar la mantenibilidad**: Un código limpio es más fácil de corregir. Al refactorizar, se reduce el riesgo de introducir nuevos errores al hacer cambios.

- **Facilitar la adición de nuevas funcionalidades**: Al tener una base de código limpia y bien diseñada, es más rápido y seguro añadir nuevas características sin romper las existentes.

**¿Cuándo se debe Refactorizar?**

La refactorización no es un proyecto grande y único, sino una práctica continua y sistemática. Martin Fowler, una de las figuras más importantes en este tema, sugiere que la refactorización debería ser parte del ciclo de desarrollo diario. Los momentos ideales para refactorizar incluyen:

1. **Antes de añadir una nueva funcionalidad**: Asegurarse de que el código base esté limpio antes de construir sobre él.

2. **Cuando se corrige un error (bug)**: Si encuentras un "mal olor de código" (o code smell, un síntoma de un problema de diseño) mientras arreglas un error, es un buen momento para refactorizar esa parte.

3. **Durante las revisiones de código**: Si otro desarrollador señala una forma más clara de escribir algo, refactorizarlo inmediatamente.

>La clave es hacer pequeños cambios incrementales y ejecutar las pruebas automáticas para asegurarse de que no se ha roto nada. Esta práctica regular evita que la deuda técnica se acumule hasta convertirse en un problema inmanejable.

### Consecuencias de la Deuda Técnica
Ignorar la deuda técnica puede llevar a graves problemas a largo plazo para un proyecto de software:

- **Ralentización del desarrollo**: A medida que la deuda técnica se acumula, se vuelve cada vez más difícil y lento agregar nuevas características. El equipo pasa más tiempo arreglando problemas y lidiando con código complicado que creando valor real.

- **Aumento de errores**: El código desordenado y mal diseñado es más propenso a tener errores. Esto puede llevar a una experiencia de usuario deficiente y a la pérdida de confianza en el producto.

- **Desmotivación del equipo**: Trabajar constantemente en un código "roto" o difícil de entender puede ser frustrante y desmotivador para los desarrolladores.

- **Costos más altos**: Con el tiempo, la deuda técnica puede hacer que los costos de mantenimiento y desarrollo se disparen, superando con creces los supuestos beneficios a corto plazo de tomar atajos.

- Dificultad para agregar nuevas funcionalidades.
- Mayor probabilidad de errores y bugs.
- Riesgo de que el proyecto se vuelva insostenible.

## Cuadrante de la Deuda Técnica - Martin Fowler
El "Cuadrante de la Deuda Técnica" de Martin Fowler es un modelo que ayuda a los equipos de desarrollo a entender los orígenes y las motivaciones de la deuda técnica, clasificándola en cuatro categorías basadas en dos ejes: intencionalidad (deliberada o inadvertida) y actitud (prudente o imprudente). Este esquema, una mejora a las clasificaciones iniciales de la deuda, permite tomar mejores decisiones sobre cómo gestionarla.

1. **Deuda Deliberada y Prudente**
Esta es una deuda consciente y estratégica. El equipo decide a propósito tomar un atajo en el código para obtener un beneficio a corto plazo, como lanzar una característica vital para el negocio antes de la competencia. Sin embargo, lo hace con la intención y el plan de "pagar" la deuda más adelante, es decir, de refactorizar el código cuando sea oportuno. Es como pedir un préstamo sabiendo exactamente cuándo y cómo lo vas a pagar.

    **Ejemplo**: Un equipo necesita lanzar una versión de prueba (MVP) de un producto en un mes. Saben que el código no es perfecto, pero deciden que es más importante validar la idea rápidamente y planifican una refactorización para la siguiente fase del proyecto.

2. **Deuda Deliberada e Imprudente** 
Este es el tipo de deuda más peligroso. Es una deuda consciente, pero sin un plan de pago. El equipo toma atajos sabiendo que el código es de mala calidad, sin la intención de corregirlo en el futuro. Esto a menudo es resultado de una mala gestión, presión extrema o falta de profesionalismo, y puede llevar a un proyecto al caos. Es como pedir un préstamo sin pensar en cómo lo vas a devolver.

    **Ejemplo:** Un desarrollador "parchea" un error rápidamente con código duplicado y no sigue las buenas prácticas, sabiendo que es una solución temporal pero sin documentar ni planear cómo se arreglará de manera adecuada.

3. **Deuda Inadvertida y Prudente**
Esta deuda se crea sin intención, pero con una actitud proactiva. Ocurre cuando un equipo se da cuenta, a posteriori, de una mejor manera de haber hecho algo. Un desarrollador puede escribir un código de calidad según su conocimiento actual, pero a medida que aprende más o que el proyecto evoluciona, se da cuenta de que la arquitectura inicial podría ser mejor. El equipo actúa de forma prudente al reconocer la deuda y planifica cómo abordarla.

    **Ejemplo**: Después de implementar una característica, el equipo realiza una retrospectiva y descubre que el diseño del módulo podría optimizarse para ser más escalable. Deciden documentar esta "deuda" y refactorizarlo más adelante.

4. **Deuda Inadvertida e Imprudente**
Esta es la deuda más común y difícil de gestionar. Ocurre sin intención y sin una actitud proactiva. Los desarrolladores crean la deuda sin saberlo, a menudo por falta de conocimiento, experiencia o por la complejidad del sistema. El equipo no es consciente de que el código es deficiente hasta que causa problemas, y la deuda se acumula silenciosamente. Es como no darse cuenta de que estás contrayendo una deuda hasta que te llega el extracto del banco.

    **Ejemplo:** Un desarrollador sin experiencia en patrones de diseño crea una clase monolítica con múltiples responsabilidades, lo que hace que sea muy difícil de probar y modificar. El problema no se hace evidente hasta que se intenta añadir una nueva funcionalidad y se tarda mucho más de lo esperado.



## Principios DRY (Don't Repeat Yourself)
El principio DRY (Don't Repeat Yourself), que significa "No te repitas a ti mismo", es una regla fundamental en la programación.

El principio DRY nos dice:

> [!TIP]
> “No copies y pegues la misma cosa muchas veces. Escríbela una sola vez y reutilízala”.

Imagina que estás escribiendo una receta de cocina. Si tienes que escribir las instrucciones para "cortar la cebolla" en 5 lugares diferentes de la receta, ¿qué pasa si decides que quieres cortarla en trozos más grandes? Tendrías que ir a los 5 lugares y cambiar cada uno.

El principio DRY te dice que, en lugar de repetir la misma instrucción (el código), la escribas solo una vez. Así, si tienes que hacer un cambio, solo lo haces en un único lugar, y ese cambio se aplicará a todas las partes de tu programa que usen esa instrucción.

En la programación, esto se logra creando algo llamado función o método.

**Ejemplo Sencillo**

Imagina que tienes que calcular el área de un círculo en varios lugares de tu programa.

- **Sin DRY (repitiendo código):**
    ```ts
    // Primer lugar
    let area1 = 10 * 5;

    // En otro lugar del código
    let area2 = 8 * 3;

    // En otro más
    let area3 = 12 * 6;
    ```
    Aquí estás repitiendo la misma lógica (base * altura) en varios sitios.
    Si mañana cambias la forma de calcular el área (ej. convertir a cm²), tendrás que corregir en todos lados.

- **Con DRY (sin repetir, usando una función):**
    ```ts
    function calcularArea(base, altura) {
        return base * altura;
    }

    let area1 = calcularArea(10, 5);
    let area2 = calcularArea(8, 3);
    let area3 = calcularArea(12, 6);
    ```
    Ahora solo escribiste la fórmula una vez.

    - Si mañana cambias la fórmula, lo haces en un solo lugar.
    - El código es más limpio, fácil de leer y mantener.