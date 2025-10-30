let count = 0;
function increment(){
    count += 1;
    document.getElementById("count").innerText = count;
}
function save(){
    let save = document.getElementById("count").innerText;
    document.getElementById("btm-text").innerText += save + " - ";
}