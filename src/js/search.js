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
// const url = 'https://visitor-registry-52230.firebaseio.com/';
// const comment = document.getElementById('empleado').value;
// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(comment),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(res => res.json())
//   .catch(error => console.error('Error:', error))
//   .then(response => {
//     console.log(response);
//   });

// const

// fetch(url, {
//   method: 'GET'
// })
//   .then(res => res.json())
//   .catch(error => console.error('Error:', error))
//   .then(response => {
//     if (!response) {
//       return false;
//     }
//     const posts = Object.keys(response).reduce((acumulator, value) => {
//       let post = response[value];
//       post.id = value;
//       return [...acumulator, post];
//     }, []).map(post => postTemplate(post)).join('');
//     return document.getElementById('container-empleado').innerHTML += posts;
//   });

// const postTemplate = data => {
//   console.log(data);
// };


