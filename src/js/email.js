const email = (email, name, visiter) => {
(() => {
                emailjs.init("user_nhhZsQqfBmhKeYEKe78KN");
             })();
            const vue = new Vue({
                el: '#app',
                data(){
                    return {
                        from_name: '',
                        from_email: '',
                        message: '',
                        subject: '',
                    }
                },
                methods: {
                    enviar(){
                        let data = {
                            from_name: name,
                            from_email: email,
                            message: `Buen día;
                            Se encuentra esperando: ${visiter} en recepción.
                            Saludos`,
                            subject: 'Coworking Recepción'
                        };

                        emailjs.send("gmail","template_DxEHAO9s", data)
                        .then(function(response) {
                            if(response.text === 'OK'){
                                alert('El correo se ha enviado de forma exitosa');
                            }
                           console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                        }, function(err) {
                            alert('Ocurrió un problema al enviar el correo');
                           console.log("FAILED. error=", err);
                        });
                    }
                }
            });
}
