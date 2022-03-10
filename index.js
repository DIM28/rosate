var numbOfButtonsLenght = document.querySelectorAll(".drum").length;

for (var i = 0; i < numbOfButtonsLenght; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {


    var buttomInnerHTML = this.innerHTML;

    switch (buttomInnerHTML) {
      case "vini":
        var vini = new Audio('sounds/vini.mp3');
        vini.play();
        break;

      case "benzema":
      var karim = new Audio('sounds/karim.mp3');
      karim.play();
      break;

      case "cristiano":
      var cristiano = new Audio('sounds/cr7.mp3');
      cristiano.play();
      break;

      case "florentino":
      var floren = new Audio('sounds/floren.mp3');
      floren.play();
      break;

      case "modric":
      var luka = new Audio('sounds/luka.mp3');
      luka.play();
      break;

      case "sergio":
      var sergio = new Audio('sounds/sergio.mp3');
      sergio.play();
      break;

      case "escudo":
      var halamadrid = new Audio('sounds/halamadrid.mp3');
      halamadrid.play();
      break;

      default: console.log(buttomInnerHTML);

    }


  });

}
