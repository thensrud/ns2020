
let modal = document.getElementById("modal");

let thief1 = document.getElementById("thief-1");
let thief2 = document.getElementById("thief-2");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

thief1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = thief1.src;
  captionText.innerHTML = thief1.alt;
}

thief2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = thief2.src;
  captionText.innerHTML = thief2.alt;
}

let close = document.getElementsByClassName("close")[0];

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
