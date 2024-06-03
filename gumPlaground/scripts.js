const videoEl = document.querySelector('#my-video');
let stream = null //Init stream var so we can use it anywhere
const constraints = {
    audio : true, //use your headponse, or be be for feedback!
    video : true,
}
const getMicAndCamera = async(e)=>{
    try{
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
        changeButtons([
            'green','blue','grey','grey','grey','grey','grey','grey'
        ]);
    } catch(err) {
        console.log("user denied access to constraints");
    }
};

const showMyFeed = e=>{
    console.log("showMyFeed is working");
    if(!stream) {
        alert("Still loading");
        return;
    }
    videoEl.srcObject = stream; //this is set our media stream to our <video />
    const tracks = stream.getTracks();
    console.log(tracks);
    changeButtons([
        'green','green','blue','blue','blue','grey','grey','blue'
    ]);
}

const stopMyFeed = e=>{
    console.log("stopMyFeed is working");
    if(!stream) {
        alert("Still loading");
        return;
    }
    const tracks = stream.getTracks();
    tracks.forEach(track => {
        track.stop();
    });
    changeButtons([
        'blue','grey','grey','grey','grey','grey','grey','grey'
    ]);

}
document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e));
document.querySelector('#show-video').addEventListener('click',e=>showMyFeed(e));
document.querySelector('#stop-video').addEventListener('click',e=>stopMyFeed(e));
document.querySelector('#change-size').addEventListener('click',e=>changeVideoSize(e));
