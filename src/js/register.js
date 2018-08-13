let player = document.getElementById('player');
let captureButton = document.getElementById('capture');
let camera = document.getElementById('camera');
let recapture = document.getElementById('recapture');
const handleSuccess = (stream) => {
  player.srcObject = stream;
};

captureButton.addEventListener('click', () => {
  let shot = document.getElementById('shot');
  shot.innerHTML = `<canvas id= 'snapshot' width='220' height='220' class = 'col-md-12 rounded-circle'> </canvas>`;
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
const toBack =() => {
  location.href = ('../index.html');
}

const showRegister = () => {
  let company = document.getElementById('register');
  let picture = document.getElementById('picture');
  company.style.display = 'block';
  picture.style.display = 'none';
  document.getElementById('arrow-sig').style.display = 'none';
document.getElementById('body-bg').classList.remove("almost-dark");
}
const showsnapshot = () => {
  document.getElementById('data-general').style.display = 'none';
  document.getElementById('picture').style.display = 'block';
  document.getElementById('arrow-right').style.display = 'none';
  let arrowSig = document.getElementById('arrow-sig');
  arrowSig.innerHTML =  `<button type='button' class=' col-md-1 offset-10 btn btn-warning btn-circle btn-lg rounded-circle' id='arrow-register-right'><i class='material-icons font-icon'>arrow_forward</i>
  </button>`
    document.getElementById('body-bg').classList.add("almost-dark");
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
  document.getElementById('body-bg').classList.add("almost-dark");
  let name = document.getElementById('name-visit').value;
  let lastname = document.getElementById('lastname-visit').value;
  let company = document.getElementById('empleado').value;
  document.getElementById('frm-register').innerHTML = `<h3 class ='col-md offset-1 left-subtitle font-white medium-font text-center'>Hola, ${name} ${lastname}</h3>
  <p class= 'col-md offset-1 left-subtitle font-white text-center font-subtitle'>Se le ha notificado a ${company} de tu llegada</p>
  <p class= 'col-md offset-1 left-subtitle font-white text-center font-subtitle'>Por favor espera y toma asiento</p>
  <button class= 'btn btn-warning btn-lg col-md-4 offset-4 btn-ready' id = 'ready'>Listos</button>

  `;

  document.getElementById('ready').addEventListener('click', toBack);

};

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
