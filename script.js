
console.log("Hello 🌎");


const btn = document.querySelector("button"); 
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'rotated' code in style.css
    btn.classList.toggle("rotated");
  };
}


