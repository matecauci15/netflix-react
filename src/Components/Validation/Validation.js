const validation = ({ email, password }) => {
    const errors = {};
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'El mail no es válido';
    }
    if (!email) {
      errors.email = 'Debe ingresar un email';
    }
    if (email.length > 35) {
      errors.email = 'El email no debe superar los 35 caracteres';
    }
    if (!/.*\d+.*/.test(password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    }
    if (password.length < 6 || password.length > 10) {
      errors.password = 'La contraseña debe tener un tamaño entre 6 y 10 caracteres';
    }
  
    return errors;
  };
  
  export default validation;
  