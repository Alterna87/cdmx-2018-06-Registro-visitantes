const email = (email, name, visiter) => {
  (()=> {
    emailjs.init('user_nhhZsQqfBmhKeYEKe78KN');
  })();
  // Añado los parametros que quiero que contenga mi plantilla
  let templateParams = {
    name: name,
    user_email: email,
    message: `Se encuentra ${visiter} en recepción`
  };
  // Agrego la plantilla previamente configurada del datadashboard del emailjs
  emailjs.send('default_service', 'blank', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
};
