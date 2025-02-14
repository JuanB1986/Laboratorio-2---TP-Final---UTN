const btn = document.getElementById('formBotonEnviar');


document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();
  btn.value = 'Enviando...';

  // Identificadores del servicio de EmailJS
  const serviceID = '';      //Agregar ID Generado en emailJS
  const templateID = '';     //Agregar template Generado en emailJS

  // Envía el formulario utilizando EmailJS
  emailjs.sendForm(serviceID, templateID, this).then(() => {
    // Envío exitoso.
    btn.value = 'Enviar';
    mostrarAlerta('Email enviado con éxito!', 'success');
  }, (err) => {
    // Error de envío.
    btn.value = 'Enviar';
    alert(JSON.stringify(err));
    mostrarAlerta('Error al enviar el Email', 'error');
  });
});
