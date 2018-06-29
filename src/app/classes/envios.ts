
export class Envios {
    id: string;
    estado: string;
    tipo: string;
    historial: Historial[];
    numTracking: number;
    remitente: Remitente;
    destinatario: Destinatario;
    idTransporte: string;
    detalles: Detalles;
}

export class Historial {
    estado: string;
    tienda: string;
    fecha: string;
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
    pesoFacturable: number;
    información: string;
    perecedero: boolean;
}
