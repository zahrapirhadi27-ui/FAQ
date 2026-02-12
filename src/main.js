const lis1tEl = document.getElementById("list1");
const p1El = document.getElementById("p1");
const icon1El = document.getElementById("icon1");
console.log(lis1tEl);
console.log(p1El);
console.log(icon1El);

lis1tEl.addEventListener("click", () => {
  lis1tEl.classList.toggle("active");
  icon1El.classList.toggle("rotate-45")
});




