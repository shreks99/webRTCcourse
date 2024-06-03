let mediaRecorder;
let recordBlobs;
const startRecording = ()=>{
    console.log("Start Recording");
    recordBlobs = []; //an array to hold the blobs for playback
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable=e=>{
        //ondataavaliable will run when the stream ends or stopped or we specifically tell to
        console.log("Data is avaliable for the media recorder!");
        recordBlobs.push(e.data);
    }
    mediaRecorder.start();
}
const stopRecording = ()=>{
    console.log("Stop Recording");
    mediaRecorder.stop();
}
const playRecording = ()=>{
    console.log("Play Recording");
    const superBuffer = new Blob(recordBlobs) 
    const recordedVideoEl = document.querySelector('#other-video');
    recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
    recordedVideoEl.controls = true;
    recordedVideoEl.play();
}
