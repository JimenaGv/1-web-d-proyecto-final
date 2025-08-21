
export const authRequired = (req, res, next) => {
    console.log("Validando token")
    console.log(req.headers)
    next()
}
