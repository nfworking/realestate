let video=document.getElementById("video"     
);
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

video.ontimeupdate=()=>{
    ctx.drawImage(video,0,0,video.videoWidth, video.videoHeight,0,0,canvas.width, canvas.height)
}