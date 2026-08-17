export interface IRequestSessionID {
    userId:   string;
}

export interface UserSession {
    userSessionsId: string;
    idUser: number;
    tipoDocumento: number;
    documento: string;
    apellidos: string;
    nombres: string;
    username: string;
    email: string;
    genero: number;
    telefono: string;
    direccion: string;
    activo: number;
    idDependencia: number;
    nombreDependencia: string;
    codigoDependencia: string;
    siglaDependencia: string;
    cargo: string;
    idTipoUser: number;
    tipoUser: string;
    token: TokenData; // Relación con la interfaz TokenData
}
export interface ApiResponse<T> {
    success: boolean;
    message: string | null;
    result: T;
    time: number;
  }
export interface totalConversaciones {
    totalConversaciones: number;
  }
  export interface totalDocsGenerados {
    totalDocsGenerados: number;
  }
  export interface totalDemandasCalificadas {
    totalDemandasCalificadas: number;
  }
  export interface totalDemandasSentencias {
    totalDemandasSentencias: number;
  }
export interface TokenData {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
    not_before_policy: number;
    session_state: string;
    scope: string;
}
