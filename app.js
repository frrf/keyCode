let code = document.getElementById("code");
let key = document.getElementById("key");
window.addEventListener('keydown', function(e){
  code.textContent = e.keyCode;
  e.key == " " ? key.textContent = "Spacebar" : key.textContent = e.key;
  console.log(e.key);
})    