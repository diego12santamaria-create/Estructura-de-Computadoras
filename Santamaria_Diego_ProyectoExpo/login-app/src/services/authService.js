const USUARIO_DEMO = {
  email: 'admin@demo.com',
  password: '123456',
  nombre: 'Administrador',
};
 
export function login(email, password) {
  return new Promise((resolve, reject) => {
    // setTimeout simula el tiempo de respuesta de un servidor
    setTimeout(() => {
      const correoValido = email.trim().toLowerCase() === USUARIO_DEMO.email;
      const passwordValido = password === USUARIO_DEMO.password;
 
      if (correoValido && passwordValido) {
        resolve({ nombre: USUARIO_DEMO.nombre, email: USUARIO_DEMO.email });
      } else {
        reject(new Error('Correo o contraseña incorrectos'));
      }
    }, 1500);
  });
}