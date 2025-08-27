import jwt from "jsonwebtoken"

export const authRequired = (req, res, next) => {
    /* console.log("Validando token") */

    const {token} = req.cookies

    if(!token) return res.status(401).json({message: "Autorización denegada"})

    // token, secretKey, callback; devuelve error o usuario
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(err) return res.status(403).json({message: "El token no es válido"})
        
            /* console.log(user) */
            req.user = user
    })

    /* console.log(req.cookies) */
    next() // Lleva al auth.controller
}
