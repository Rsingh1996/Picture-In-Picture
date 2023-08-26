const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select a media screen, pass to video elememt, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  //   Start Picture In picture
  await videoElement.requestPictureInPicture();

  //   Reset Button
  button.disabled = false;
});

// OnLoad
selectMediaStream();
