/* Clase utilizada para armar la estructura de los documentos de la colección de métodos de envío en la base de datos. */
export class MetodosEnvio {
    public constructor(public id: string, public tiempo: string, public tipos: string[]) {
    }
}
