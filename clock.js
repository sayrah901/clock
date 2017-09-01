setInterval( function(){
  var seconds = new Date().getSeconds();
  var minutes = new Date().getMinutes();
  var hours = new Date().getHours();
  
  var secRotate = seconds*6;
  var minRotate = minutes*6;
  var hourRotate = hours*30 + (minutes/2); 
  
  $(".second-hand").css({"transform": "rotate("+ secRotate + "deg)"});
  $(".minute-hand").css({"transform": "rotate("+ minRotate + "deg)"});
   $(".hour-hand").css({"transform": "rotate("+ hourRotate + "deg)"});
}, 1000);
