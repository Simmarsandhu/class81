canvas= document.getElementById("mycanvas");
canvas_2=canvas.getContext("2d");

color="blue";
canvas_2.beginPath();
canvas_2.strokeStyle=color;
canvas_2.lineWidth=2;
canvas_2.arc(150,150,40,0,2*Math.PI);
canvas_2.stroke();

canvas.addEventListener("mousedown",draw_circle);

function draw_circle(e){
    color=document.getElementById("my_color").value;

    console.log(color);
    x_position=e.clientX- canvas.offsetLeft;
    y_position=e.clientY - canvas.offsetTop;

    console.log("X= "+ x_position+"Y= " + y_position);
    circle(x_position,y_position);

}
 function circle(x_position,y_position){
     canvas_2.beginPath();
     canvas_2.strokeStyle=color;
     canvas_2.lineWidth=2;
     canvas_2.arc(x_position,y_position,40,0,2*Math.PI);
     canvas_2.stroke();



 }
 function clear_1(){
     canvas_2.clearRect(0,0,canvas.width,canvas.height);
 }