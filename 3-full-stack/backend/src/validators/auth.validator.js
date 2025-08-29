import { body } from "express-validator"

export const registerValidator = [
    // Debe existir y tener al menos 3 caracteres
    body("username")
    .notEmpty().withMessage("Nombre de usuario requerido")
    .isLength({min: 3}).withMessage("Username debe tener mínimo 3 caracteres"),

    // El email debe ser válido
    body("email")
    .notEmpty().withMessage("El email es obligatorio")
    .isEmail().withMessage("Debe ser un correo válido"),

    // Debe existir y tener al menos 6 caracteres
    body("password")
    .notEmpty().withMessage("La contraseña es obligatoria")
    .isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres")
]

export const loginValidator = [

    // El email debe ser válido
    body("email")
    .notEmpty().withMessage("El email es obligatorio")
    .isEmail().withMessage("Debe ser un correo válido"),

    // Debe existir y tener al menos 6 caracteres
    body("password")
    .notEmpty().withMessage("La contraseña es obligatoria")
    
]
