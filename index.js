function changefontweight() {
  var getText = document.getElementById("text");
  if (getText.style.fontWeight == "normal") {
    getText.style.fontWeight = "bold";
  } else {
    getText.style.fontWeight = "normal";
  }
}
//    function changeItalic()
//     {
//     var getText= Document.getElementById("text");
//     if(getText.style.fontStyle=="normal")
//     {
//         getText.style.fontStyle="italic";
//     }
// else {
//     getText.style.fontStyle="normal";

// }

function changeItalic() {
  document.getElementById("text").classList.toggle("italic");
}
function inder() {
  document.getElementById("text").classList.toggle("inder");
}
function changePx() {
  let x = document.getElementById("px").value;

  document.getElementById("text").style.fontSize = x + "px";
}
function changePolice() {
  let x = document.getElementById("iheb").value;
  console.log(x);
  document.getElementById("text").style.fontFamily = x;
}
