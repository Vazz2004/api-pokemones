import cors from 'cors'

const ACEEPTED_ORIGINS = [
  'http://localhost:4200'

]

export const corsMiddleware = ({ acceptedOrigins = ACEEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return (callback(new Error('No almacenado en los CORS')))
  },
  credentials: true
})
