window.scrollBy({ 
  top: 70, 
  left: 0, 
  behavior: 'smooth' 
});

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["femail"].value;
  if (y == "") {
    alert("E-mail must be filled out");
    return false;
  }
  let z = document.forms["myForm"]["fsubject"].value;
  if (z == "") {
    alert("Name must be filled out");
    return false;
  }
}