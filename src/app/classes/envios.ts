export class Envios {
    public constructor(public id: string, numTracking: number,
        remitente: object, destinatario: object,
        origen: string, destino: string, fechaEnvio: Date, tipoEnvio: string, descripcion: string, perecedero: boolean) {
    }
}
