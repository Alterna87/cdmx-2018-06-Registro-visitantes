let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let camera = document.getElementById('camera');
let frame = document.getElementById('frame');

const handleSuccess = (stream) => {
  player.srcObject = stream;
};

captureButton.addEventListener('click', ()=> {
let context = snapshot.getContext('2d');
context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);

let snap = snapshotCanvas.toDataURL();
let refImages = firebase.storage().ref();

// console.log(file);
let uploadImages = refImages.child('images/prueba.png');
uploadImages.putString(snap, 'data_url').then(function(snapshot) {
  console.log('Uploaded a base64 string!');
});


});

camera.addEventListener('change', (event)=> {
  let file = event.target.files[0];
})
 //
 navigator.mediaDevices.getUserMedia({video: true})
  .then(handleSuccess);
