// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');


var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

// Get the modal
var modal2 = document.getElementById('myModal2');
var modalImg2 = document.getElementById("img02");
var img2 = document.getElementById('myImg2');
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
};

// Get the modal
var modal3 = document.getElementById('myModal3');
var modalImg3 = document.getElementById("img03");
var img3 = document.getElementById('myImg3');
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
};

// Get the modal
var modal4 = document.getElementById('myModal4');
var modalImg4 = document.getElementById("img04");
var img4 = document.getElementById('myImg4');
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText.innerHTML = this.alt;
};



