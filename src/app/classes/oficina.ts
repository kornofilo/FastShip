export class Oficina {
    id: string;
    direccion: string;
    disponibilidad: Disponibilidad;
    horario: Horario;
    nombre: string;
    posGeografica: PosGeografica;
    tipo: string;
}

export class Disponibilidad {
    envia: boolean;
    recibe: boolean;
}

export class Horario {
    diasLaborables: string;
    horaApertura: string;
    horaCierre: string;
}

export class PosGeografica {
    lat: number;
    long: number;
}
