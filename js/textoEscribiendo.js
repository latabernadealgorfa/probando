var i = 0;
var tag = document.getElementById("texto");
var txt = document.getElementById("texto").innerHTML;
var speed = 80;
function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("texto").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();