import { SMTPClient } from 'emailjs';

// Configuración del cliente SMTP para Gmail
const gmail = 'samivazqueles@gmail.com';
const password = 'elgc pixz lbzr ekyp';

const client = new SMTPClient({
  user: gmail,
  password: password, // Tu contraseña de Gmail o token si usas autenticación en dos pasos
  host: 'smtp.gmail.com',
  ssl: true, // Usar SSL para Gmail
});

export default client;
