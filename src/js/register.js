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
console.log();
});
 //
 // navigator.mediaDevices.getUserMedia({video: true})
 //  .then(handleSuccess);
