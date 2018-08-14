const email = (email, name, visiter) => {
  (()=> {
    emailjs.init('user_nhhZsQqfBmhKeYEKe78KN');
  })();

  let templateParams = {
    name: name,
    user_email: email,
    message: `Se encuentra ${visiter} en recepción`
  };
  emailjs.send('default_service', 'blank', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
};
