/* Clase utilizada para armar la estructura de los documentos de la colección de métodos de envío en la base de datos. */
export class Cargamento {
    id: string;
    fechaCarga: string;
    tipoEnvio: string;
   idTransp: string;
    tiendaDestin: string;
    numTracking: string [];
    estado: string;
}
