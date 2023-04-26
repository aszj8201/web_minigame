const canavas = document.getElementById("jsCanvas");
const ctx = canavas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const clear = document.getElementById("jsClear");
const saveBtn = document.getElementById("jsSave");
const black = document.getElementById("black");
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const skyblue = document.getElementById("skyblue");
const blue = document.getElementById("blue");
const white = document.getElementById("white");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 450;

canavas.width = CANVAS_SIZE;
canavas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "#INITIAL_COLOR";
ctx.fillstyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "채우기";
    } else {
        filling = true;
        mode.innerText = "그리기";
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveCLick() {
    const image = canavas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintbrush🎨";
    link.click();
}

black.addEventListener("click",  ()=>{
    // black.style.border = "1.5px solid white";
    black.style.transform = "scale(0.7)";
    red.style.transform = "scale(1.0)";
    orange.style.transform = "scale(1.0)";
    yellow.style.transform = "scale(1.0)";
    green.style.transform = "scale(1.0)";
    skyblue.style.transform = "scale(1.0)";
    blue.style.transform = "scale(1.0)";
    white.style.transform = "scale(1.0)";
});

red.addEventListener("click",  ()=>{
    // red.style.border = "1.5px solid white";
    red.style.transform = "scale(0.7)";
    black.style.transform = "scale(1.0)";
    orange.style.transform = "scale(1.0)";
    yellow.style.transform = "scale(1.0)";
    green.style.transform = "scale(1.0)";
    skyblue.style.transform = "scale(1.0)";
    blue.style.transform = "scale(1.0)";
    white.style.transform = "scale(1.0)";
});

orange.addEventListener("click",  ()=>{
    // orange.style.border = "1.5px solid white";
    orange.style.transform = "scale(0.7)";
    red.style.transform = "scale(1.0)";
    black.style.transform = "scale(1.0)";
    yellow.style.transform = "scale(1.0)";
    green.style.transform = "scale(1.0)";
    skyblue.style.transform = "scale(1.0)";
    blue.style.transform = "scale(1.0)";
    white.style.transform = "scale(1.0)";
});

yellow.addEventListener("click",  ()=>{
    // yellow.style.border = "1.5px solid white";
    yellow.style.transform = "scale(0.7)";
    red.style.transform = "scale(1.0)";
    orange.style.transform = "scale(1.0)";
    black.style.transform = "scale(1.0)";
    green.style.transform = "scale(1.0)";
    skyblue.style.transform = "scale(1.0)";
    blue.style.transform = "scale(1.0)";
    white.style.transform = "scale(1.0)";
});

green.addEventListener("click",  ()=>{
    // green.style.border = "1.5px solid white";
    green.style.transform = "scale(0.7)";
    red.style.transform = "scale(1.0)";
    orange.style.transform = "scale(1.0)";
    yellow.style.transform = "scale(1.0)";
    black.style.transform = "scale(1.0)";
    skyblue.style.transform = "scale(1.0)";
    blue.style.transform = "scale(1.0)";
    white.style.transform = "scale(1.0)";
});

skyblue.addEventListener("click",  ()=>{
    // skyblue.style.border = "1.5px solid white";
    skyblue.style.transform = "scale(0.7)";
    red.style.transform = "scale(1.0)";
    orange.style.transform = "scale(1.0)";
    yellow.style.transform = "scale(1.0)";
    green.style.transform = "scale(1.0)";
    black.style.transform = "scale(1.0)";
    blue.style.transform = "scale(1.0)";
    white.style.transform = "scale(1.0)";
});

blue.addEventListener("click",  ()=>{
    // blue.style.border = "1.5px solid black";
    blue.style.transform = "scale(0.7)";
    red.style.transform = "scale(1.0)";
    orange.style.transform = "scale(1.0)";
    yellow.style.transform = "scale(1.0)";
    green.style.transform = "scale(1.0)";
    black.style.transform = "scale(1.0)";
    skyblue.style.transform = "scale(1.0)";
    white.style.transform = "scale(1.0)";
});

white.addEventListener("click",  ()=>{
    // white.style.transform = "1.5px solid black";
    white.style.transform = "scale(0.7)";
    red.style.transform = "scale(1.0)";
    orange.style.transform = "scale(1.0)";
    yellow.style.transform = "scale(1.0)";
    green.style.transform = "scale(1.0)";
    black.style.transform = "scale(1.0)";
    blue.style.transform = "scale(1.0)";
    skyblue.style.transform = "scale(1.0)";
});

if (canavas) {
    canavas.addEventListener("mousemove", onMouseMove);
    canavas.addEventListener("mousedown", startPainting);
    canavas.addEventListener("mouseup", stopPainting);
    canavas.addEventListener("mouseleave", stopPainting);
    canavas.addEventListener("click", handleCanvasClick);
    canavas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(Strawberry =>
    Strawberry.addEventListener("click", handleColorClick)
);

if (range) {
    range.addEventListener("input", handleRangeChange);
}
if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveCLick);
}







jsClear.addEventListener('click',function clear() {
    location.reload();
})
























