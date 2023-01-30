var buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
var buttoninnerhtml=this.innerHTML;
makeSound(buttoninnerhtml);
buttonAnimation(buttoninnerhtml);

    });
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key){
  switch (key) {
    case 'w':
    var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
    var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      case "s":
      var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
          case "j":
          var audio=new Audio("sounds/crash.mp3");
            audio.play();
            case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
              audio.play();
              case "l":
              var audio=new Audio("sounds/snare.mp3");
                audio.play();
                default:console.log(this.innerHTML);
  }
}
function buttonAnimation(key){
  var activeButton=document.querySelector("."+key);
              activeButton .classList.add("pressed");
              setTimeout(
                function(){
                  activeButton.classList.remove("pressed");
                },100);
}
