
let screen_width = screen.width;
let screen_height = screen.height;

var col_01 = document.getElementById("rect_01");
var col_02 = document.getElementById("rect_02");
var col_03 = document.getElementById("rect_03");
var col_04 = document.getElementById("rect_04");

if(screen_width > 500){
    col_01.style.width = "10%";
    col_02.style.width = "15%";
    col_03.style.width = "10%";
    col_04.style.width = "15%";
    col_01.style.height = "100%";
    col_02.style.height = "100%";
    col_03.style.height = "100%";
    col_04.style.height = "100%";
}else{
    col_01.style.width = "5%";
    col_02.style.width = "8%";
    col_03.style.width = "5%";
    col_04.style.width = "8%";
    col_01.style.height = "100%";
    col_02.style.height = "100%";
    col_03.style.height = "100%";
    col_04.style.height = "100%";
}