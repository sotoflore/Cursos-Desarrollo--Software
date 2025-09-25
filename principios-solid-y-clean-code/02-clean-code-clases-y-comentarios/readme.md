# Clean Code Clases

## Principio de Responsabilidad Única (SRP)

## Estructura Recomendada de una clase

Comenzar con lista de propiedades
1. Propiedades estaticas
2. Propiedades publicas 
3. Propiedades privadas

Metodos
1. Empezando por los constructores estaticos
2. Luego el constructor
3. Seguidamente metodos estaticos
4. Metodos privados despues
5. Resto de metodos de instancia ordenados de mayor a menor importancia
6. Getter y Setters al final

Estructura General
```ts
export class MiClase {
  // 1. Propiedades estáticas
  static readonly VERSION = '1.0.0';
  private static instancia: MiClase;

  // 2. Propiedades de instancia (públicas primero, luego privadas)
  public nombre: string;
  readonly id: number;
  protected estado: string;
  private _datos: any[];

  // 3. Constructor
  constructor(nombre: string, id: number) {
    this.nombre = nombre;
    this.id = id;
    this.estado = 'activo';
    this._datos = [];
  }

  // 4. Métodos estáticos
  static obtenerInstancia(): MiClase {
    if (!this.instancia) {
      this.instancia = new MiClase('default', 1);
    }
    return this.instancia;
  }

  // 5. Getters y Setters
  get datos(): readonly any[] {
    return this._datos;
  }

  set datos(nuevosDatos: any[]) {
    this._datos = [...nuevosDatos];
  }

  // 6. Métodos públicos
  public procesar(): void {
    this.validarDatos();
    // lógica de procesamiento
  }

  public obtenerInfo(): string {
    return `${this.nombre} - ${this.id}`;
  }

  // 7. Métodos protegidos
  protected validarEstado(): boolean {
    return this.estado === 'activo';
  }

  // 8. Métodos privados
  private validarDatos(): void {
    if (this._datos.length === 0) {
      throw new Error('No hay datos para procesar');
    }
  }
}
```