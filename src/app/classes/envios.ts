export class Envios {
        id: string;
        numTracking: number;
        remitente: Remitente;
        destinatario: Destinatario;
        detalles: Detalles;
}


export class Remitente {
    nombre: string;
    apellido: string;
    telefono: string;
}

export class Destinatario {
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
}

export class Detalles {
    origen: string;
    destino: string;
    fechaEnvio: Date;
    tipoEnvio: string;
}

export class Especificaciones {
    largo: number;
    ancho: number;
    alto: number;
    peso: number;
    información: string;
    perecedero: boolean;
}
