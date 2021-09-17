const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rotation;

let x, y;

canvas.addEventListener("keydown", function(e) {
    console.log(e.code);
});