let overlayElement = document.querySelector('img.overlay');
let audio = document.querySelector('audio');
console.log(overlayElement);
console.log(audio);
setTimeout(function(){overlayElement.setAttribute("style", "display: none;");}, 6000);