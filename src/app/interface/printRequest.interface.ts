export interface PrintRequest {
    operaciones:     Operacione[];
    nombreImpresora: string;
    serial:          string;
}

export interface Operacione {
    nombre:     string;
    argumentos: string[];
}
