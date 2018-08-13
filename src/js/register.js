// TODO:
// funcion de notificar

let player = document.getElementById('player');
let captureButton = document.getElementById('capture');
let camera = document.getElementById('camera');
let recapture = document.getElementById('recapture');
const handleSuccess = (stream) => {
  player.srcObject = stream;
};

captureButton.addEventListener('click', () => {
  let shot = document.getElementById('shot');
  shot.innerHTML = `<canvas id= 'snapshot' width='220' height='220' class = 'col-md-12 rounded-circle'>
  </canvas>`;
  snapshotCanvas = document.getElementById('snapshot');
  let context = snapshot.getContext('2d');
  snapshotCanvas.style.display = 'block';
  context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  player.style.display = 'none';
  recapture.style.display = 'block';
  captureButton.style.display = 'none';
  // let snap = snapshotCanvas.toDataURL();


  // console.log(file);
  // let uploadImages = refImages.child(`images/${fecha}.png`);
  // uploadImages.putString(snap, 'data_url').then(function(snapshot) {
  //   c
});
const toBack = () => {
  location.href = ('../index.html');
};

const showRegister = () => {
  let company = document.getElementById('register');
  let picture = document.getElementById('picture');
  company.style.display = 'block';
  picture.style.display = 'none';
  document.getElementById('arrow-sig').style.display = 'none';
  document.getElementById('body-bg').classList.remove('almost-dark');
};

const showsnapshot = () => {
  document.getElementById('data-general').style.display = 'none';
  document.getElementById('picture').style.display = 'block';
  document.getElementById('arrow-right').style.display = 'none';
  let arrowSig = document.getElementById('arrow-sig');
  arrowSig.innerHTML = `<button type='button' class= 'col-md-1 offset-10 btn btn-warning btn-circle btn-lg rounded-circle' id='arrow-register-right'><i class='material-icons font-icon'>arrow_forward</i>
  </button>`;
  document.getElementById('body-bg').classList.add('almost-dark"');
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

// const showNotification = () => {
//   document.getElementById('notificar').addEventListener('click', (event) => {
//     console.log('hola mundo');
//   })
// }
const showmodal = () => {
  document.getElementById('body-bg').classList.add('almost-dark');
  let name = document.getElementById('empleado').value;
  let lastname = document.getElementById('lastname-visit').value;
  let company = document.getElementById('name-visit').value;
  document.getElementById('frm-register').innerHTML = `<h3 class ='col-md offset-1 left-subtitle font-white medium-font text-center'>Hola visitante</h3>
  <p class= 'col-md offset-1 left-subtitle font-white text-center font-subtitle'>Se le ha notificado a ${name} de tu llegada</p>
  <p class= 'col-md offset-1 left-subtitle font-white text-center font-subtitle'>Por favor espera y toma asiento</p>
  <button class= 'btn btn-warning btn-lg col-md-4 offset-4 btn-ready' id = 'ready'>Listos</button>

  `;

  document.getElementById('ready').addEventListener('click', toBack);
};

//  flechas de siguiente
let arrowRight = document.getElementById('arrow-right');
arrowRight.addEventListener('click', showsnapshot);


let notification = document.getElementById('notification');
notification.addEventListener('click', showmodal);
//   acceso a la camara
navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);

// Hasta aquí aplica cambios Francis

//  funcionalidad del search para buscar empleados
window.onload = () => {
  const url = 'https://visitor-registry-52230.firebaseio.com/';
  fetch(url + 'empresas.json', {
    method: 'GET',
    //  informacion del request
    headers: {
      //  lo que se envia lo tome como formato json
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    // el response ya esta convertido en json por eso se llama difernte
    .then(empresas => {
      console.log(empresas);

      //  filtado por compañia
      // document.getElementById('company').addEventListener((event) => {
      //   console.log(event.target.value);
      const companys = empresas.map((company) => {
        return (`<option value="${company.id}">${company.name}</option>`);
      });
      document.getElementById('select-empresas').innerHTML += companys;
      console.log(companys);
      // });
    });
  document.getElementById('select-empresas').addEventListener('change', (event) => {
    console.log(event.target.value);
    fetch(url + 'empleados.json?orderBy="company"&equalTo=' + event.target.value, {
      method: 'GET',
      //  informacion del request
      headers: {
        //  lo que se envia lo tome como formato json
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(empleados => {
        // console.log(empleados, empleados.length);
        return window.localStorage.setItem('empleados', JSON.stringify(empleados));
      });
  });
  // keyup = evento que se dispara cuandode suelta una tecla
  document.getElementById('empleado').addEventListener('keyup', (event) => {
    let empleados = window.localStorage.getItem('empleados');
    empleados = JSON.parse(empleados);

    console.log('[empleados]', empleados);

    let empleadosFiltrados = Object.keys(empleados).reduce((accumulador, indice) => {
      accumulador.push(empleados[indice]);
      return accumulador;
    }, []).filter((empleado) => {
      return empleado.name.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1;
    }).map((empleado) => {
      return (`
        <li class="list-group-item-secondary" onclick="pintaEmpleado('${empleado.name} ${empleado.lastname}')">
          ${empleado.name} ${empleado.lastname}
        </li>
      `);
    }).join('');

    document.getElementById('templete-empleados').innerHTML = empleadosFiltrados;

    // console.log(event.target.value);
    // const filtrarEmpleados = response.filter((empleado) => {
    //   return empleado.name.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1;
    // }).map((empleado) => {
    //   return (`<li class="list-group-item-secondary" onclick="pintaEmpleado()">${empleado.name} ${empleado.lastname}</li>`);
    // }).join('');
    // document.getElementById('templete-empleados').innerHTML = filtrarEmpleados;
    // console.log(filtrarEmpleados);
  });

  window.pintaEmpleado = (name) => {
    document.getElementById('templete-empleados').innerHTML = '';

    return document.getElementById('empleado').value = name;
  };
};
