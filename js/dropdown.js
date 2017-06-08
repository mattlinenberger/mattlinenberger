// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("dropBtn").onclick = function() {drop()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}


//second drop button
document.getElementById("dropBtn2").onclick = function() {drop2()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function drop2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}


//third drop button
document.getElementById("dropBtn3").onclick = function() {drop3()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function drop3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
}