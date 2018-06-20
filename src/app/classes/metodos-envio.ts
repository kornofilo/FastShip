/* Clase utilizada para armar la estructura de los documentos de la colección de métodos de envío en la base de datos. */
export class MetodosEnvio {
    id: string;
    tiempo: string;
    tipos: TiposMetodosEnvio;
}

export class TiposMetodosEnvio {
    aire: boolean;
    mar: boolean;
    tierra: boolean;
}
