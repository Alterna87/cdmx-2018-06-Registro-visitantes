
(function () {
  const config = {
    apiKey: 'AIzaSyDRjINqfMgVY7CH_sCyrqMIDpIZFWskDN8',
    authDomain: 'visitor-registry-52230.firebaseapp.com',
    databaseURL: 'https://visitor-registry-52230.firebase io.com',
    projectId: 'visitor-registry-52230',
    storageBucket: 'visitor-registry-52230.appspot.com',
    messagingSenderId: '433105581092'
  };

  firebase.initializeApp(config);

  //   get elements
  const comment = document.getElementById('empleado');
  console.log(comment);

  //  sincronizar objeto
  dbRefObject.on('value', snap =>)
}());

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


