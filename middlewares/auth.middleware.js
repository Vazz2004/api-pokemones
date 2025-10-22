import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const validateAccessToken = (req, res, next) => {
  const { authToken } = req.cookies

  if (!authToken) {
    return res.status(401).json({ success: false, error: 'Acceso no autorizado' })
  }

  try {
    const veryfied = jwt.verify(authToken, process.env.JWT_SECRET)
    req.user = veryfied
    next()
  } catch (error) {
    return res.status(401).json({ success: false, error: 'Acceso no autorizado' })
  }
}
