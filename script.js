const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
   try {
      // We are waiting for the user to chose which screen or media he wants to stream
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
         audio: true,
         video: true
      });
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
         videoElement.play();
      };
      videoElement.srcObject = mediaStream;
      videoElement.play();
   } catch (err) {
      console.log('Error at select media stream', err);
   }
}

button.addEventListener('click', async () => {
   // Disable button
   button.disabled = true;
   // Start Picture in Picture
   await videoElement.requestPictureInPicture();
   // Reset button
   button.disabled = false;
});

// On load
selectMediaStream();
