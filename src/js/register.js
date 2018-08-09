let player = document.getElementById('player');

let captureButton = document.getElementById('capture');
let camera = document.getElementById('camera');
let recapture = document.getElementById('recapture');
const handleSuccess = (stream) => {
  player.srcObject = stream;
};

captureButton.addEventListener('click', ()=> {

let shot = document.getElementById('shot');
shot.innerHTML = `<canvas id='snapshot' width='200' height='180' class = 'col-md offsset-1 camera-radius'></canvas>`;
snapshotCanvas = document.getElementById('snapshot');
let context = snapshot.getContext('2d');
snapshotCanvas.style.display = 'block';
context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
player.style.display = 'none';
recapture.style.display = 'block'
captureButton.style.display = 'none';
let snap = snapshotCanvas.toDataURL();
let refImages = firebase.storage().ref();

// console.log(file);
// let uploadImages = refImages.child(`images/${fecha}.png`);
// uploadImages.putString(snap, 'data_url').then(function(snapshot) {
//   console.log('Uploaded a base64 string!');
// });

});


const showsnapshot = () => {
document.getElementById('data-general').style.display = 'none';
document.getElementById('picture').style.display = 'block';
};

recapture.addEventListener('click', ()=> {
  captureButton.style.display = 'block';
  recapture.style.display = 'none';
  player.style.display = 'block';
  snapshotCanvas.style.display = 'none';

})
let arrowRight = document.getElementById('arrow-right');
arrowRight.addEventListener('click', showsnapshot);
 //
 navigator.mediaDevices.getUserMedia({video: true})
  .then(handleSuccess);
