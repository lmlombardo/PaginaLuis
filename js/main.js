function redirection(url){
  var win = window.open(url,);
  win.focus();
}

var imagenes=new Array(
   	['./images/imagen1.jpeg'],
    ['./images/imagen2.jpeg'],
    ['./images/imagen3.jpeg'],
    ['./images/imagen4.jpeg'],
    ['./images/imagen5.jpeg'],
    ['./images/imagen6.jpeg'],
    ['./images/imagen7.jpeg'],
    ['./images/foto.jpg']
);

function rotarImagenes()
{
    var index=Math.floor((Math.random()*imagenes.length));

    document.getElementById("imagen").src=imagenes[index];
}

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("boSc").style.display = "block";
  } else {
    document.getElementById("boSc").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
