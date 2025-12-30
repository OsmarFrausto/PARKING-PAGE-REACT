// utils/constants.ts

// Nombre de las claves usadas en localStorage
export const STORAGE_KEYS = {
  USER: 'auth_user',
  TOKEN: 'auth_token',
};

// Roles de usuario
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
} as const;

// Tiempo de expiración del token (en días)
export const TOKEN_EXPIRATION_DAYS = 7;

// Idiomas soportados
export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;

// Temas disponibles
export const THEMES = ['light', 'dark'] as const;

// Mensajes de error comunes
export const ERROR_MESSAGES = {
  NETWORK: 'Error de conexión. Intenta de nuevo más tarde.',
  UNAUTHORIZED: 'No autorizado. Inicia sesión de nuevo.',
};
