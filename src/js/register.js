let player = document.getElementById('player');
let captureButton = document.getElementById('capture');
let camera = document.getElementById('camera');
let recapture = document.getElementById('recapture');
const handleSuccess = (stream) => {
  player.srcObject = stream;
};

captureButton.addEventListener('click', () => {
  let shot = document.getElementById('shot');
  shot.innerHTML = `<canvas id= 'snapshot' width='320' height='320' class = 'col-md-12 rounded-circle'> </canvas>`;
  snapshotCanvas = document.getElementById('snapshot');
  let context = snapshot.getContext('2d');
  snapshotCanvas.style.display = 'block';
  context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  player.style.display = 'none';
  recapture.style.display = 'block'
  captureButton.style.display = 'none';
  // let snap = snapshotCanvas.toDataURL();


  // console.log(file);
  // let uploadImages = refImages.child(`images/${fecha}.png`);
  // uploadImages.putString(snap, 'data_url').then(function(snapshot) {
  //   console.log('Uploaded a base64 string!');
  // });

});

const showRegister = () => {
  let company = document.getElementById('register');
  let picture = document.getElementById('picture');
  company.style.display = 'block';
  picture.style.display = 'none';

}
const showsnapshot = () => {
  document.getElementById('data-general').style.display = 'none';
  document.getElementById('picture').style.display = 'block';
  document.getElementById('arrow-right').style.display = 'none';
  let arrowSig = document.getElementById('arrow-sig');
  arrowSig.innerHTML =  `<button type='button' class=' col-md-1 offset-10 btn btn-warning btn-circle btn-lg rounded-circle' id='arrow-register-right'><i class='material-icons font-icon'>arrow_forward</i>
  </button>`
  let arrowRightRegister = document.getElementById('arrow-register-right');
  arrowRightRegister.addEventListener('click', showRegister);
  // let arrowRight = document.getElementsByClassName('arrow-right');
  // arrowRight.classList.add('arrow-righttoregister');
  // arrowRight.classList.remove('arrow-right');
  // let arrowtoregister = document.getElementsByClassName('arrow-righttoregiste');
  // arrowtoregister.addEventListener('click', showRegister);
};

recapture.addEventListener('click', () => {
  captureButton.style.display = 'block';
  recapture.style.display = 'none';
  player.style.display = 'block';
  snapshotCanvas.style.display = 'none';

});

const showmodal = () => {
  let name = document.getElementById('name-visit').value;
  let lastname = document.getElementById('lastname-visit').value;
  let email = document.getElementById('email-visit').value;
  let company = document.getElementById('company').value;
  swal({

    position: 'top-end',
    type: 'success',
    title: `Bienvenido ${name}`,
    html: `Se le ha enviado una notificación a ${company} <br>` +
      `Toma asiento Por favor`,
    showConfirmButton: false,
    timer: 1500
  })

}

let arrowRight = document.getElementById('arrow-right');
arrowRight.addEventListener('click', showsnapshot);
//

let notification = document.getElementById('notification');
notification.addEventListener('click', showmodal);

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);


//  funcionalidad del search para buscar empleados
window.onload = () => {
  const url = 'https://visitor-registry-52230.firebaseio.com/empleados.json';
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(response);
      document.getElementById('empleado').addEventListener('keyup', (event) => {
        console.log(event.target.value);
        const filtrarEmpleados = response.filter((empleado) => {
          return empleado.name.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1;
        }).map((empleado) => {
          return (`<li class="list-group-item-secondary">${empleado.name} ${empleado.lastname} de ${empleado.company}</li>`);
        }).join('');
        document.getElementById('templete-empleados').innerHTML = filtrarEmpleados;
        console.log(filtrarEmpleados);
      });
    });
};
