window.onload = () => {
  const url = 'https://visitor-registry-52230.firebaseio.com/';
  fetch(url + 'visiters.json', {
    method: 'GET',
    //  informacion del request
    headers: {
      //  lo que se envia lo tome como formato json
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    // el response ya esta convertido en json por eso se llama difernte
    .then(visitors => {

      // transformo el json de objetos en un arreglo de objetos
      const visitorsRows = Object.keys(visitors).reduce((acumulador, visitorId) => {
        // obtiene el visitor por el ID
        const visitor = visitors[visitorId];

        // guarda el visitor (objeto) en el arreglo
        acumulador.push(visitor);
        // retorna el arreglo con el nuevo valor
        return acumulador;
      }, []).map((visitor) => {

        let x;


        // filas que se insertaran en la tabla de visitantes
        return (
        `   <tr>
            <td><img src='${visitor.images}' class ='rounded-circle img-thum'></td>
            <td>${visitor.name} ${visitor.lastname}</td>
            <td>${visitor.empleado}</td>
            <td>${visitor.time}</td>
            <td>${visitor.date}</td>

          </tr>
        `);
      }).join('');
      // console.log(visitorsRows);
      // insertas en la tabla las filas de los visitantes
      return document.getElementById('visitors-table').innerHTML = visitorsRows;
    });
};

const logOut = ()=> {
  firebase.auth().signOut();
  location.href = ('../index.html');
};

let btnSalir = document.getElementById('exit');

btnSalir.addEventListener('click', logOut);
