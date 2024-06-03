const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);

const changeVideoSize = ()=>{
    stream.getVideoTracks().forEach(track => {
        const height = document.querySelector('#vid-height').value
        const width = document.querySelector('#vid-width').value
        const vConstraints = {
            height: {ideal: height},
            width: {ideal: width},
        }
        track.applyConstraints(vConstraints);
        // console.log(capabilities);
    });
    // stream.getTracks().forEach(track => {
    //     const capabilities = track.getCapabilities()
    //     console.log(capabilities);
    // });
}