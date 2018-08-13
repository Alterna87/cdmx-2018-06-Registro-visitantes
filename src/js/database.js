window.database = {
  // Función Francis
  connection: () => {
    let config = {
      apiKey: 'AIzaSyDRjINqfMgVY7CH_sCyrqMIDpIZFWskDN8',
      authDomain: 'visitor-registry-52230.firebaseapp.com',
      databaseURL: 'https://visitor-registry-52230.firebaseio.com',
      projectId: 'visitor-registry-52230',
      storageBucket: 'visitor-registry-52230.appspot.com',
      messagingSenderId: '433105581092'
    };
    firebase.initializeApp(config);
  },

  uploadData: (name, lastname, downloadURL, company) => {
    firebase.database().ref('visiters').push({
        name: name,
      lastname: lastname,
        images: downloadURL,
        company: company,
      });
  }
};

database.connection();
